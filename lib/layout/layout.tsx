import React from 'react';
import {scopedClassMaker} from '../classes';

const sc = scopedClassMaker('fui-layout')

const Layout: React.FunctionComponent = (props) => {
    return (
        <div className={sc()}>
            {props.children}
        </div>
    )
}

export default Layout;