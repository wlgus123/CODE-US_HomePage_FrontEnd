import React from "react";
import Header from "../components/Header";
import Introduce from "./Introduce";
import Start from "./Start";

const MainPage = () => {
    return (
        <div>
            <Header />
            <Start />
            <Introduce />
        </div>
    )
}

export default MainPage;