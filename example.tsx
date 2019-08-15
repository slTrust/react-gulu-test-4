import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';

import IconExample from './lib/icon/icon.example';
import ButtonExample from './lib/button/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout , Aside , Header , Content , Footer } from "./lib/layout/layout";
import './example.scss';


    ReactDOM.render(
    <Router>
        <Layout style={{border:'1px solid red'}} className="page">
            <Header style={{border:'1px solid green'}}>
                <div className="logo">
                    FUI
                </div>
            </Header>
            <Layout>
                <Aside style={{ border:'1px solid blue' }}>
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
                    </ul>
                </Aside>
                <Content>
                    <Route path="/icon" component={IconExample}/>
                    <Route path="/button" component={ButtonExample}/>
                    <Route path="/dialog" component={DialogExample}/>
                    <Route path="/layout" component={LayoutExample}/>
                </Content>
            </Layout>
            <Footer style={{border:'12px solid black'}}>
                footer
            </Footer>
        </Layout>
    </Router>
,document.querySelector('#root'));