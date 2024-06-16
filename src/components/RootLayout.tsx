import React, { Children, ReactElement } from "react";
import Header from "./Header/Header";
import HeaderBottom from "./Header/HeaderBottom";
import Footer from "./Footer";

interface Props {
  children: ReactElement;
}
const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <HeaderBottom />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
