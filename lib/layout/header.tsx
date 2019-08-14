import React from 'react';
import {scopedClassMaker} from '../classes';
import './layout.scss'

const sc = scopedClassMaker('fui-layout')

const Header: React.FunctionComponent = (props) => {
    return (
        <div className={sc('header')}>
            {props.children}
        </div>
    )
}

export default Header;