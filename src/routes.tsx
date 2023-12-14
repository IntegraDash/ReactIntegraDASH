import { Route, Routes } from "react-router-dom";


import Favoritos from './pages/Favoritos'
import Login from './pages/Login' 
import { Analises } from "./pages/Analises";
import Recuperacao from "./pages/Recuperacao";
import Possplash from "./pages/Possplash";
import Principal from "./pages/Principal";
import Home from "./pages/Home";
import Estrategia from "./pages/Estrategia";
import Configuracoes from "./pages/Configuracoes";

import './style.css'
import Painel from "./pages/Painel";
import Restauracao from "./pages/Restauracao";
import Alertas from "./pages/Alertas";

function MainRoutes() {

    return (
        <Routes>
            <Route path="/analises" element={<Analises/>}/>
            <Route path="/favoritos" element={<Favoritos/>}/>
            <Route path="/home" element={<Home/>}/>            
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Principal/>}/>
            <Route path="/possplash" element={<Possplash/>}/>
            <Route path="/recuperacao" element={<Recuperacao/>}/>
            <Route path="/estrategias" element={<Estrategia/>} />
            <Route path="/configuracoes" element={<Configuracoes/>}/>
            <Route path="/alertas" element={<Alertas/>} />
            <Route path="/restauracao" element={<Restauracao/>} />
        </Routes>
    )
}

export default MainRoutes;