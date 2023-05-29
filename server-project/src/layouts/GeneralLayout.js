import React,{useState} from 'react';
import {Layout} from "antd";
import {MenuSider} from "../components/MenuComponents/MenuSider/MenuSider";
import {MenuTop} from "../components/MenuComponents/MenuTop/MenuTop";
import { FooterPage } from "../components/FooterPage/FooterPage";
import "./GeneralLayout.scss";
import {LogOut} from "../components/MenuComponents/Logout/LogOut";
import {Home} from "../components/MenuComponents/Home/Home"

export const GeneralLayout = (props) => {
  const {children} = props;
  const [menuCollapsed,setMenuCollapsed] = useState(false);
  const {Header,Content,Footer}=Layout;

  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed}/>
      <Layout className="general-layout" >
      <Header className="general-layout-header">
      <MenuTop
        menuCollapsed={menuCollapsed}
        setMenuCollapsed={setMenuCollapsed}
        />
        {/* <Home className="general-layout-header-logout"></Home> */}
        {/* <LogOut className="general-layout-header-logout"></LogOut> */}
      </Header>
      <Content className="general-layout-content">{children}</Content>
      <Footer className="general-layout-footer">
      <FooterPage></FooterPage>
      </Footer>
    </Layout>
    </Layout>
  );
};



