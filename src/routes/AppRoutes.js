import React from 'react';
import { Route } from "react-router-dom";
import HomePage from "../views/HomePage";

function AppRoutes() {
    return (
        <>
            <main className="container">
                <Route path="/" exact component={HomePage} />
                <Route path="/article/:id" exact component={HomePage} />
            </main>
        </>
    )
}

export default AppRoutes;