

import React from "react";
import logo from '../imagenes/logo.png';


function Sidebar(){
    return(
        <aside>
            <h2>Sidebar</h2>
            <img src={logo} className="logo-epn" alt="logo"></img>
            <p>Contenido de Sidebar</p>
            <ul className="collapse">
                <li><a href="">Mi perfil</a></li>
                <li><a href="">Tareas</a></li>
                <li><a href="">Productos</a></li>
                <li><a href="">Logout</a></li>
            </ul>
        </aside>
    );
}

export default Sidebar;


