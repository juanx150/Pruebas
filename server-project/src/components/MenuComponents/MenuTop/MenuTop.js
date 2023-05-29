import React from "react";
import {Button} from "antd";
import Logo from "../../../assets/logo.png";
import "./MenuTop.scss";
import { MenuFoldOutlined,MenuUnfoldOutlined } from "@ant-design/icons";

export const MenuTop =(props) =>{
    const{menuCollapsed,setMenuCollapsed} = props;
    return(
        <div className="menu-top">
         <div className="menu-top_left">
            <Button
            type="link"
            onClick={()=> setMenuCollapsed(!menuCollapsed)}
            aria-label={menuCollapsed ? "Mostrar menu" : "Ocultar mennu"}
         >
            {menuCollapsed ? <MenuUnfoldOutlined/> :<MenuFoldOutlined />}
         </Button>
         <img className="menu-top_left_logo" src={Logo} alt="Logo"  />

         </div>
         </div>
        );
    };
