import React from "react";
import Header from "../Header/Header";

interface Props {
  children: React.ReactNode;
}

function Navbar({ children }: Props) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Navbar;
