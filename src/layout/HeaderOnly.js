import React from "react";
import Header from "../components/Header";

const HeaderOnly = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default HeaderOnly;
