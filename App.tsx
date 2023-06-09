import React from 'react';
import './App.css';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import {Pagina2} from "./Pagina2";
import {Optiune1} from "./Optiune1";

const { SubMenu } = Menu;

function App() {
  return (
    
      <div className="main_cont">
      <Router>
        <Menu mode="inline">
          <Menu.Item key="home" icon={<MailOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="pagina2" icon={<AppstoreOutlined />}>
            <Link to="/pagina2">Pagina 2</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<SettingOutlined />} title="Opțiuni">
            <Menu.Item key="optiune1">
              <Link to="/optiune1">Opțiunea 1</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
         
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
        <Routes>
          <Route path="/" element={<h1>Locatii turistice</h1>} />
          
          <Route path="/optiunea1" element={<h1>Locatia 1</h1>} />
          <Route path="/pagina2" element={<Pagina2 />} />
          <Route path="/optiune1" element={<Optiune1 />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
