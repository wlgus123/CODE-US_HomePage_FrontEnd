import React from "react";
import Header from "../components/Header";
import Introduce from "./Introduce";
import ProjectResult from "./ProjectResult";
import Start from "./Start";

const MainPage = () => {
    return (
        <div>
            <Header />
            <Start />
            <Introduce />
            <ProjectResult />
        </div>
    )
}

export default MainPage;