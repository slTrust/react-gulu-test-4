import React from 'react';
import {scopedClassMaker} from '../classes';

const sc = scopedClassMaker('fui-layout')

const Footer: React.FunctionComponent = (props) => {
    return (
        <div className={sc('footer')}>
            {props.children}
        </div>
    )
}

export default Footer;