import React,{useState} from 'react';
import {Button, Col, Divider, Input, Layout} from "antd";
import {MenuSider} from "../components/MenuComponents/MenuSider/MenuSider";
import {MenuTop} from "../components/MenuComponents/MenuTop/MenuTop";
import { FooterPage } from "../components/FooterPage/FooterPage";
import "./GeneralLayout.scss";
import {LogOut} from "../components/MenuComponents/Logout/LogOut";
import {Home} from "../components/MenuComponents/Home/Home"
import { Label } from 'semantic-ui-react';
import { Login } from '../pages/General/Login';

export const LayoutLogin = (props) => {
  const {children} = props;
  const [menuCollapsed,setMenuCollapsed] = useState(false);
  const {Header,Content,Footer}=Layout;

  return (
    <Layout>
      <Layout className="general-layout" >
      <Header className="general-layout-header">
      <MenuTop
        menuCollapsed={menuCollapsed}
        setMenuCollapsed={setMenuCollapsed}
        />
        <Col span={9}><Login className="general-layout-header-logout"></Login></Col>
      </Header>
      <Content className="general-layout-content">
        <Col span={4}>
        <Label>Email</Label>
        <Input></Input>
        <Label>Contraseña</Label>
        <Input style={{ marginBottom: '20px' }}></Input>
        <Button>Ingresar</Button>
        </Col>
        
      </Content>
      <Footer className="general-layout-footer">
      <FooterPage></FooterPage>
      </Footer>
    </Layout>
    </Layout>
  );
};



