import React from 'react';
import {scopedClassMaker} from '../classes';

const sc = scopedClassMaker('fui-layout')

const Content: React.FunctionComponent = (props) => {
    return (
        <div className={sc('content')}>
            {props.children}
        </div>
    )
}

export default Content;