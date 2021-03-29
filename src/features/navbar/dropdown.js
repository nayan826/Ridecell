import React, { useContext } from "react";
import { Dropdown, Button } from "semantic-ui-react";
import UserAvatar from "react-user-avatar";
import { observer } from "mobx-react-lite";
import { RootContextStore } from "../../app/stores/rootStore";
import { toJS } from "mobx";

const CustomDropdown = () => {
  const rootStore = useContext(RootContextStore);
  const { user, logout, reset } = rootStore.userStore;
  const userDetails = toJS(user);

  const trigger = (
    <span>
      <UserAvatar size="48" name={userDetails.person.display_name} />
    </span>
  );
  const options = [
    {
      key: "display_name",
      text: (
        <div>
          <h2>Display Name</h2>
          <h4>{userDetails.person.display_name}</h4>
        </div>
      ),
      disabled: false,
    },
    {
      key: "account_age",
      text: (
        <div style={{ margin: "20px 0px 20px 0px" }}>
          <span style={{ fontWeight: "bold" }}>Account age : </span>
          <span style={{ float: "right" }}>1day</span>
        </div>
      ),
    },
    {
      key: "security",
      text: (
        <div style={{ margin: "20px 0px 20px 0px" }}>
          <div style={{ fontWeight: "bold" }}>Security</div>
          <span style={{ fontWeight: "bold" }}>Last Update : </span>
          <span style={{ float: "right" }}>2day</span>
        </div>
      ),
    },
    {
      key: "reset",
      text: (
        <div style={{ margin: "20px 0px 20px 0px", textAlign: "center" }}>
          <Button
            onClick={() => reset("email@example.com")}
            type="button"
            color="pink"
            content="Rest Password"
          />
        </div>
      ),
    },
    {
      key: "logout",
      text: (
        <div style={{ margin: "20px 0px 20px 0px", textAlign: "center" }}>
          <Button onClick={logout} type="button" color="red" content="Logout" />
        </div>
      ),
    },
  ];
  return (
    <>
      <Dropdown trigger={trigger} options={options} icon={null} />
    </>
  );
};

export default observer(CustomDropdown);
