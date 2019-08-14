import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';

export default function(){
    return (
        <div>
            <div>
                <h1>第一个例子</h1>
                <Layout>
                    <Header>header</Header>
                    <Content>content</Content>
                    <Footer>footer</Footer>
                </Layout>
            </div>            
        </div>
    )
};