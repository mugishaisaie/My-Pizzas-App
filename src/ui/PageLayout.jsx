import React from "react";
import Header from "./Header";
import { Link, Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

function PageLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
        {isLoading && <Loader />}
      
      <Header />
     
     <div className="overflow-scroll">

      <main className="max-w-3xl mx-auto">
        <Outlet />
      </main>
     </div>

      <CartOverview />
    </div>
  );
}

export default PageLayout;
