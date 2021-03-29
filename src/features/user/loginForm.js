import React, { useContext } from "react";
import { Form as FinalForm, Field } from "react-final-form";
import { Form, Button } from "semantic-ui-react";
import TextInput from "../../app/common/form/textInput";
import { isRequired, combineValidators } from "revalidate";
import { RootContextStore } from "./../../app/stores/rootStore";
import { FORM_ERROR } from "final-form";
import { Link } from "react-router-dom";

const validate = combineValidators({
  email: isRequired("email"),
  password: isRequired("password"),
});

const LoginForm = () => {
  const rootStore = useContext(RootContextStore);
  const { login } = rootStore.userStore;
  return (
    <FinalForm
      validate={validate}
      onSubmit={(values) =>
        login(values).catch((error) => ({
          [FORM_ERROR]: error,
        }))
      }
      render={({
        handleSubmit,
        submitting,
        form,
        submitError,
        pristine,
        invalid,
        dirtySinceLastSubmit,
      }) => (
        <Form onSubmit={handleSubmit} error>
          <Field name="email" type="email" component={TextInput} placeholder="Email" />
          <Field
            name="password"
            component={TextInput}
            placeholder="Password"
            type="password"
          />
          <br />
          <div>
            <Button type = "submit" color="green" content="Login" />
            <Button type = "button" as = {Link} to = {`/register`} color="blue" content="Sign Up" />
          </div>
        </Form>
      )}
    />
  );
};

export default LoginForm;
