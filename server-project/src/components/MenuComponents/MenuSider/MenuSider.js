import React from "react";
import {Layout,Menu} from "antd";
import{
    HomeOutlined,
    TeamOutlined,
    AppstoreOutlined,
} from "@ant-design/icons";
import { useLocation,useNavigate } from "react-router-dom";
import "./MenuSider.scss";

export const MenuSider = (props) =>{
    const {Sider} = Layout;
    const navigate = useNavigate();
    const location =useLocation();
 

    const menuItemns=[
        {key:"/users",icon: <HomeOutlined/>,label:"Usuarios",},
        {key:"/products",icon:<TeamOutlined/>,label:"Productos",},
        {key:"/services",icon:<AppstoreOutlined/>,label:"Servicios",},    
        {key:"/config",icon:<AppstoreOutlined/>,label:"Configuracion",},    
    ];

    const navigateTo = (e) => {
        const path = e.key;
        console.log(path);
        navigate(path);
    };

    const itemRender = (item,index)=>{
        const {icon,label} = item;
        const isSelected = location.pathname === item.key;
        return(
            <Menu.Item
            key={item.key}
            icon={icon}
            className={
                isSelected ? "ant-menu-item ant-menu-item-selected" : "ant-menu-item"   
            }
            >
                {label}
            </Menu.Item>
        );
    };

    return(
        <Sider className="menu-sider" collapsed={props.menuCollapsed}>
        <Menu
        mode="inline"
        onClick={navigateTo}
        defaultSelectedKeys={[location.pathname]}
        items={menuItemns}
        >
            {menuItemns.map((item)=>itemRender(item))}
        </Menu>
        </Sider>
    );
};