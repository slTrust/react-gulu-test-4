import React, { Fragment, ReactElement, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';
import {Icon} from '../index';
import {scopedClassMaker} from '../classes';

interface Props {
    visible:boolean;
    buttons?:Array<ReactElement>;
    onClose:React.MouseEventHandler;
    closeOnClickMask?:boolean;
}

const scopedClass = scopedClassMaker('fui-dialog');
const sc = scopedClass;




const Dialog:React.FunctionComponent<Props> = (props) => {
    const onClickClose:React.MouseEventHandler = (e)=>{
        props.onClose(e);
    }
    const onClickMask:React.MouseEventHandler = (e)=>{
        if(props.closeOnClickMask){
            props.onClose(e);
        }
    }
    const x = props.visible ?
    // 遮罩层的div 和 dialog分开，因为点击遮罩层要消失 
    // <Fragment>  是为了渲染时不多渲染一个 div 和通过编译 
    // 不能直接返回多个节点必须一个根节点，
    //  而是只它里面的内容

    // 关闭按钮不要在 header里 因为这样就必须有 header
    <Fragment>
        <div className={sc('mask')} onClick={onClickMask}></div>
        <div className={sc()}>
            <div className={sc('close')} onClick={onClickClose}>
                <Icon name="close"/>
            </div>
            <header className={sc('header')}>提示</header>
            <main className={sc('main')}>
                {props.children}
            </main>
            {
                props.buttons && props.buttons.length > 0 &&
                <footer className={sc('footer')}>
                    {props.buttons && props.buttons.map((button,index) => 
                        React.cloneElement(button,{key:index}) 
                    )}
                </footer>
            }
           
        </div>
    </Fragment>
    : 
    null

    /*
    直接 {props.buttons} 会报错 因为 buttons 是数组
    需要一个key
    */
    return (
        ReactDOM.createPortal(x,document.body)
    );
}
// 设置默认 props
Dialog.defaultProps = {
    closeOnClickMask : false
}

const model = (content: ReactNode , buttons?: Array<ReactElement>,afterClose?:() => void) => {
    const close = () => {
        ReactDOM.render(React.cloneElement(component,{visable:false}),div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
        console.log('close')
    }
    const component = 
        <Dialog 
            visible={true} 
            onClose={()=>{
                close();
                afterClose && afterClose();
            }}
            buttons={buttons}
            >
            {content}
        </Dialog>;
    const div = document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component,div);
    return close;
}

const alert = (content:string) =>{
    const button = <button onClick={() => close()}>OK</button>;
    const close = model(content,[button])
}


const confirm = (content:string,yes?:() => void,no?:() => void) =>{
    const onYes = () => {
        close()
        yes && yes();
    };
    const onNo = () => {
        close()
        no && no();
    };
    const buttons = [
        <button onClick={onYes}>yes</button>,
        <button onClick={onNo}>no</button>
    ]
    const close = model(content,buttons, no);
}

export default Dialog;
export {alert, confirm , model };