import * as React from "react";
import Form, {FormValue} from "./form";
import {useState, Fragment} from "react";
import Validator, {noError} from "./validator";
import Button from "../button/button";

const usernames = ['frank','jack','tom'];
const checkUserName = (username: string,success:()=>void,fail:()=>void) =>{
    setTimeout(()=>{
        if(usernames.indexOf(username)>0){
            success()
        }else{
            fail();
        }
    },3000);
}

const FormExample:React.FunctionComponent = ()=>{
    const [formData,setFormData] = useState<FormValue>({
        username:'aaa',
        password:'111'
    })
    const [fields] = useState([
        {name:'username',label:'用户名',input:{type:'text'}},
        {name:'password',label:'密码',input:{type:'password'}},
    ])

    const [errors,setErrors] = useState({});

    const onSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        const rules = [
            {key: 'username',required: true },
            {key: 'username',minLength: 3 , maxLength:16 },
            {key: 'username',validator: {
                    name:'unique',
                    validate(username:string){
                        console.log('有人调用 validate')
                        return new Promise<void>((resolve,reject) => {
                            console.log('开始检查了')
                            checkUserName(username, resolve, reject);
                        })
                    }

                }
            },
            {key: 'username',pattern: /^[A-Za-z0-9]+$/},
        ]
        Validator(formData,rules,(errors)=>{
            console.log(1);
            console.log(errors)
            setErrors(errors);
            if(noError(errors)){
                // todo success
            }else{

            }
        });


    }

    return (
        <div>
            {JSON.stringify(errors)}
            <Form
                value={formData} fields={fields}
                buttons={
                    <Fragment>
                        <Button level="important">提交</Button>
                        <Button>返回</Button>
                    </Fragment>
                }
                errorsDisplayMode="all"
                errors={errors}
                onChange={(newValue) => setFormData(newValue)}
                onSubmit={onSubmit}
            />
        </div>
    )
}

/*
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
*/

export default FormExample;