import { useEffect, useState } from "react";
import { account } from "../Service/Appwritesdkconfig";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import { Card } from "./Card";
const Dashboard = () => {
  const navigate = useNavigate();
  const [userDetails, setuserDetails] = useState({
    email: "",
    name: "",
  });
  useEffect(() => {
    const getuser = async () => {
      try {
        const promise = await account.get();

        setuserDetails({
          ...userDetails,
          email: promise.email,
          name: promise.name,
        });
      } catch (err) {
        console.log(err.message);
      }
    };
    getuser();
  }, []);

  const Logoutuser = async () => {
    try {
      await account.deleteSession("[SESSION_ID]");
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <Navbar/>
      <h5>{userDetails.name}</h5>
      <h5>{userDetails.email}</h5>
      {/* <button onClick={() => Logoutuser()}>Logout</button> */}
      <Card/>
    </>
  );
};
export default Dashboard;
