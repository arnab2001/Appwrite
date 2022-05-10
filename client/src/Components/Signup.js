import { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { account } from "../Service/Appwritesdkconfig";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigation = useNavigate();
  const [userDetails, setUserdetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signupuser = async (e) => {
    e.preventDefault();
    console.log(userDetails);
    try {
      const newuser = await account.create(
        "unique()",
        userDetails.email,
        userDetails.password,
        userDetails.name
      );

      await account.createSession(userDetails.email, userDetails.password);
      console.log(newuser);
      navigation("/dashboard");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <Form className="signup-form">
      <h1 className="head">SIGNUP FORM</h1>
      <FormGroup className="details">
        <Label>Username</Label>
        <Input
          type="text"
          onChange={(e) => {
            setUserdetails({
              ...userDetails,
              name: e.target.value,
            });
          }}
          placeholder="Username"
        ></Input>
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setUserdetails({
              ...userDetails,
              email: e.target.value,
            });
          }}
        />
        <Label>Password</Label>
        <Input
          type="password"
          onChange={(e) => {
            setUserdetails({
              ...userDetails,
              password: e.target.value,
            });
          }}
          placeholder="Password"
        />
      </FormGroup>
      <Button
        className="btn-lg btn-dark btn-block"
        onClick={(e) => {
          signupuser(e);
        }}
      >
        Sign up
      </Button>
      {/* <div className='signup text-center'>
         <p className='head_signup'>Already have an account?</p>
         <span className='p-2'></span>
        <a href=''>Login</a>
      </div> */}
    </Form>
  );
}

export default Signup;
