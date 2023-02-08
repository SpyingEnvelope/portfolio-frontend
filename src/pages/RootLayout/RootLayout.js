import MainNavigation from "../../components/MainNavigation/MainNavigation";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/util/ScrollToTop";

const RootLayout = () => {
    return(
        <Fragment>
            <ScrollToTop />
            <MainNavigation />
            <Outlet />
            <Footer />
        </Fragment>
    )
};

export default RootLayout;