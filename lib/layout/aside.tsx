import React from 'react';
import {scopedClassMaker} from '../classes';

const sc = scopedClassMaker('fui-layout')

const Aside: React.FunctionComponent = (props) => {
    return (
        <div className={sc('aside')}>
            {props.children}
        </div>
    )
}

export default Aside;