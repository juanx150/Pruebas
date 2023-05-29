import React,{useState} from 'react';
import {Button, Col, Layout} from "antd";
import {MenuSider} from "../components/MenuComponents/MenuSider/MenuSider";
import {MenuTop} from "../components/MenuComponents/MenuTop/MenuTop";
import { FooterPage } from "../components/FooterPage/FooterPage";
import "./GeneralLayout.scss";
import {LogOut} from "../components/MenuComponents/Logout/LogOut";
import {Home} from "../components/MenuComponents/Home/Home"

export const GeneralLayoutHome = (props) => {
  const {children} = props;
  const [menuCollapsed,setMenuCollapsed] = useState(false);
  const {Header,Content,Footer}=Layout;

  return (
    <Layout>
      <Layout className="general-layout" >
      <Header className="general-layout-header">
      <Col width="4" ><MenuTop
        menuCollapsed={menuCollapsed}
        setMenuCollapsed={setMenuCollapsed}
        /></Col>
      <Col span={9}><Home className="general-layout-header-logout"></Home></Col>
      <Col><Button onClick={() => window.location.href = '/LogIn'}>Login</Button>
        <Button onClick={() => window.location.href = '/Register'}>Register</Button> </Col>
        
      </Header>
      <Content className="general-layout-content">{children}</Content>
      <Footer className="general-layout-footer">
      <FooterPage></FooterPage>
      </Footer>
    </Layout>
    </Layout>
  );
};



