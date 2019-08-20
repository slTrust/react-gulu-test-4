import * as React from "react";
import Form from "./form";
import {useState, Fragment, useRef} from "react";


/*
const FormExample:React.FunctionComponent = ()=>{
    const [formData] = useState({
        username:'',
        password:''
    })
    const [fields] = useState([
        {name:'username',label:'用户名',input:{type:'text'}},
        {name:'password',label:'密码',input:{type:'password'}},
    ])

    const [name,setName] = useState('hjx')
    return (
        <div>
            <Form value={formData} fields={fields}
                buttons={
                    <Fragment>
                        <button>提交</button>
                        <button>返回</button>
                    </Fragment>
                }
            />
        </div>
    )
}
*/

// 受控组件和非受控组件
const FormExample:React.FunctionComponent = ()=>{
    const [name,setName] = useState('hjx')
    // 泛型告诉 refInput.current 就是 input元素
    const refInput = useRef<HTMLInputElement>(null);
    const x = ()=>{
        // refInput.current 就是 input
        // 断言有值
        console.log(refInput.current!.value)
    }
    return (
        <div>
            <input value={name} onChange={(e)=> setName(e.target.value)} />

            <input defaultValue={name} ref={refInput} type="text" onBlur={x}/>
        </div>
    )
}

export default FormExample;