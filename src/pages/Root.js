import { Outlet } from "react-router-dom";

import classes from './Root.module.css';
import Header from "../components/Header";

function RootLayout() {
    return <>
        <Header />
        <main className={classes.content}>
            <Outlet />
        </main>
    </>
}

export default RootLayout;