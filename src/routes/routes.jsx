import React from "react";
import { BrowserRouter as Router,Routes, Route, BrowserRouter } from "react-router-dom";

import Zapatos from "../pages/Zapatos";
import Camisas from "../pages/Camisas";
import Pantalones from "../pages/Pantalones";
import ResponsiveAppBar from "../Components/AppBar";

function RoutesDos() {
    return (
        <BrowserRouter>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Routes>
                <Route path="Zapatos" element={<Zapatos></Zapatos>} />
                <Route path="Camisas" element={<Camisas></Camisas>} />
                <Route path="Pantalones" element={<Pantalones></Pantalones>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesDos;