import React from 'react';
import {scopedClassMaker} from '../classes';

const sc = scopedClassMaker('fui-layout')

interface Props extends React.HTMLAttributes<HTMLElement>{
}

const Layout: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    return (
        <div className={sc('',{extra:className})} {...rest}>
            {props.children}
        </div>
    )
}

export default Layout;