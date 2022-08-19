import { Routes, Route } from "react-router-dom";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Sobre" element={<About/>}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
    );
}