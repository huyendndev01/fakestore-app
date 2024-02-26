import React, { useContext, useEffect, useMemo, useState } from "react";
import { GetSingleUser } from "../service/UserServices";
import { UserLoginContext } from "../context/UserLoginContext";

const AboutUser = () => {
  const { user, id } = useContext(UserLoginContext);
  const [userData, setUserData] = useState(false);

  useEffect(() => {
    const getAUer = async (id) => {
      const res = await GetSingleUser(id);

      console.log("res", res);
      setUserData(res);
    };

    getAUer(id);
  }, []);

  return (
    <>
      {userData && (
        <div className="container mt-5">
          <div className="w-50 mx-auto d-md-flex ">
            <div className="w-md-50 w-70">
              <img
                src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
                className="w-100"
                rounded
              />
              <p className="text-center">
                {userData.name.firstname.toUpperCase()}{" "}
                {userData.name.lastname.toUpperCase()}
              </p>
            </div>
            <div className="mt-5">
              <h4>Thông tin người dùng</h4>
              <span>
                <b>Họ và tên: </b>
              </span>
              <span>
                &nbsp;{userData.name && userData.name.firstname}&nbsp;&nbsp;
                {userData.name.lastname}
              </span>
              <p>
                <b>Email:</b> {userData.email}
              </p>
              <p>
                <b>Location: </b>
                {userData.address.number} / {userData.address.street} /{" "}
                {userData.address.city}
              </p>
              <p>
                <b>Phone number: {userData.phone}</b>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutUser;
