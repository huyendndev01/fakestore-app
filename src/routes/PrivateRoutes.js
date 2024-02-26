import React, { useContext } from "react";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import { UserLoginContext } from "../context/UserLoginContext";
const PrivateRoutes = ({ children }) => {
  const { user, SetAllUser } = useContext(UserLoginContext);

  if (user && user.auth === false) {
    return (
      <div className="container mt-5">
        <Alert variant="danger">
          <Alert.Heading>
            You can't access this route before log in
          </Alert.Heading>
          <p className="mt-2" style={{ fontSize: "18px" }}>
            {" "}
            Please&nbsp;
            <b>
              <Link to="/login ">log in here</Link>
            </b>{" "}
            to see more ! Thank kiu !
          </p>
        </Alert>
      </div>
    );
  }

  return children;
};

export default PrivateRoutes;
