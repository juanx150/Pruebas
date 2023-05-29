/*rafce */
import "./App.scss";
import React from 'react';
// import {Home} from "./pages/Home";
// import { Contact } from './pages/Contact';
// import { NotFound } from './pages/NotFound';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import allRoutesProject from './config/routes';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {allRoutesProject.map((route,index)=>(
          <Route 
            key= {index} 
            path = {route.path} 
            element={
              <route.Layout>
                <route.component/>
              </route.Layout>
              }
            ></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;


/*import logo from './logo.svg';
import './App.scss';
import { Alert } from 'antd';
import { Card } from 'antd';
import { DatePicker } from 'antd';

function App() {
  const date_test = (date, dateString)=>{
    console.log(date,dateString)
  }
  return (
    <div className="App">
      <div>
        <Alert message='Success text'type='success'/>
        <Alert message='Info text'type='info'/>
        <Alert message='Warning text'type='warning'/>
        <Alert message='Error text'type='error'/>
      </div>
      <label>Selecciona una fecha</label>
      <DatePicker on onChange={date_test}></DatePicker>
      <div>
        <Card 
        size='small' 
        title='Tarjeta de presentacion' 
        extra={<a href="#">ver mas</a>}
        style= {{withd:300}}>
          <p>Alejandro Gomez</p>
          <p>Mg. Gestion y dev de proyectos de software</p>
        </Card>
      </div>
    </div>
  );
}

export default App;*/
