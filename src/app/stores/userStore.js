import { runInAction, makeAutoObservable } from "mobx";
import { User } from "../api/agent";
import { history } from "../../index";
import { toast } from "react-toastify";

class UserStore {
  rootStore;

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  user = null;

  login = async (values) => {
    try {
      const user = await User.login(values);
      runInAction(() => {
        this.user = user;
      });
      this.rootStore.commonStore.setToken(user.authentication_token);
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error(error.data.message);
      //  throw error;
    }
  };

  register = async (values) => {
    try {
      const user = await User.register(values);
      runInAction(() => {
        this.user = user;
      });
      this.rootStore.commonStore.setToken(user.authentication_token);
      history.push("/dashboard");
    } catch (error) {
      toast.error(error.message);
      // throw error;
    }
  };

  getUser = async () => {
    try {
      const user = await User.current();
      runInAction(() => {
        this.user = user;
      });
    } catch (error) {
      console.log(error);
    }
  };

  logout = () => {
    this.rootStore.commonStore.setToken(null);
    this.user = null;
    history.push("/login");
  };

  reset = async (value) => {
    try {
      const password = await User.reset(value);
      runInAction(() => {
        toast.info(password);
      });
    } catch (error) {
      toast.error("Can't send request");
      // throw error;
    }
  };
}

export default UserStore;
