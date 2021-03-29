import React, { useContext } from "react";
import { Form as FinalForm, Field } from "react-final-form";
import { Form, Button } from "semantic-ui-react";
import TextInput from "../../app/common/form/textInput";
import { isRequired, combineValidators, matchesField } from "revalidate";
import { RootContextStore } from "./../../app/stores/rootStore";
import { FORM_ERROR } from "final-form";
import { Link } from "react-router-dom";

const validate = combineValidators({
  display_name: isRequired("display name"),
  email: isRequired("email"),
  password: isRequired("password"),
  confirmPassword: matchesField("password")({
    message: "Passwords do not match",
  }),
});

const RegisterForm = () => {
  const rootStore = useContext(RootContextStore);
  const { register } = rootStore.userStore;
  return (
    <FinalForm
      validate={validate}
      onSubmit={(values) =>
        register({
          display_name: values.display_name,
          email: values.email,
          password: values.password,
        }).catch((error) => ({
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
          <Field
            name="display_name"
            component={TextInput}
            placeholder="Display Name"
          />
          <Field name="email" type="email" component={TextInput} placeholder="Email" />
          <Field
            name="password"
            component={TextInput}
            placeholder="Password"
            type="password"
          />
          <Field
            name="confirmPassword"
            component={TextInput}
            placeholder="Confirm Password"
            type="password"
          />
          <br />
          <div>
            <Button color="blue" content="Sign Up" />
            <Button as={Link} to="/login" color= "green" content="login" />
          </div>
        </Form>
      )}
    />
  );
};

export default RegisterForm;
