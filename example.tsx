import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';

import './example.scss';

import IconDemo from './lib/icon/icon.demo';
import ButtonExample from './lib/button/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout , Aside , Header , Content , Footer } from "./lib/layout/layout";
import FormExample from "./lib/form/form.example";
import ScrollExample from "./lib/scroll/scroll.example";

const logo = require('./logo.png');

    ReactDOM.render(
    <Router>
        <Layout className="site-page">
            <Header className="site-header">
                <div className="logo">
                    <img src={logo} alt="" style={{background:'#eee'}} height="48" width="48"/>
                    <span>FUI</span>
                </div>
            </Header>
            <Layout>
                <Aside className="site-aside">
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <NavLink to="/icon">Icon</NavLink>
                        </li>
                        <li>
                            <NavLink to="/button">Button</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dialog">Dialog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/layout">Layout</NavLink>
                        </li>
                        <li>
                            <NavLink to="/form">Form</NavLink>
                        </li>
                        <li>
                            <NavLink to="/scroll">Scroll</NavLink>
                        </li>
                    </ul>
                </Aside>
               <Content className="site-main">
                   <Route path="/icon" component={IconDemo}/>
                   <Route path="/button" component={ButtonExample}/>
                   <Route path="/dialog" component={DialogExample}/>
                   <Route path="/layout" component={LayoutExample}/>
                   <Route path="/form" component={FormExample}/>
                   <Route path="/scroll" component={ScrollExample}/>
               </Content>
            </Layout>
            <Footer className="site-footer">
                footer
            </Footer>

        </Layout>
    </Router>
,document.querySelector('#root'));
