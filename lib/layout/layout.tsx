import React, { ReactElement } from 'react';
import {scopedClassMaker} from '../classes';
import './layout.scss';
import Aside from './aside';

const sc = scopedClassMaker('fui-layout')

interface Props extends React.HTMLAttributes<HTMLElement>{
    // 限制我们的组件的 children 不能是一个字符串，必须是一个元素
    children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;

    const children = props.children as Array<ReactElement>
    const hasAside = children.length && 
        children.reduce((result,node) => result || node.type === Aside,false);
    return (
        <div className={sc('',{extra:[className, hasAside && 'hasAside'].join(' ')})} {...rest}>
            {props.children}
        </div>
    );

    // 报错 因为它不一定是数组
    // if(props.children.length){}

    // 只能通过断言 来绕过检查  
    // 但是这样就导致 容易写出垃圾代码 ，只是让你写的时候思考 该不该这样写
    /*
    let hasAside = false;
    if((props.children as Array<ReactElement>).length){
        (props.children as Array<ReactElement>).map(node => {
            console.log(node);
            // 一旦发现有 aside 就附加一个类 hasAside
            if(node.type === Aside){
                hasAside = true;
            }
        })
    }
    return (
        <div className={sc('',{extra:[className, hasAside && 'hasAside'].join(' ')})} {...rest}>
            {props.children}
        </div>
    )
    */

   
   /*
   // 此时还是不行  hasAside 不能在 return 里用
   if((props.children as Array<ReactElement>).length){
        const hasAside =(props.children as Array<ReactElement>)
            .reduce((result,node) => result || node.type === Aside,false);
   }
   return (
       <div className={sc('',{extra:[className, hasAside && 'hasAside'].join(' ')})} {...rest}>
           {props.children}
       </div>
   )
   */

   
}

export default Layout;