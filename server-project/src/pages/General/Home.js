import React from 'react';
import './Home.scss';
import { Layout } from 'antd';
import { MenuTop } from '../../components/MenuComponents/MenuTop/MenuTop';

export const Home = () => {
  const {Header,Content,Footer}=Layout;
  return (
    <Layout>
    <div>
      <div className="banner-container">
        <div className="text-center">
            <h1 className=" text-6xl text-orange-600 font-bold">Welcome to Habitaciones UAM</h1>
            <h4 className="text-4xl mt-8 text-white">Pa conseguir sitio donde quedarse xd</h4>
        </div>
      </div>
    </div>
 </Layout>
    
  )
}
// localhost:3000/Home