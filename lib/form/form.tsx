import * as React from "react";
import {ReactFragment} from "react";
import Input from "../input/input";

// FormValue 就是把整个 value传递回去 有性能问题 但是你有10000条数据的表单吗？ 最多提交20条
export interface FormValue{
    [K: string]: any
}

interface Props {
    value: FormValue;
    fields: Array<{name:string,label:string,input:{type:string}}>;
    buttons: ReactFragment;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    onChange: (value: FormValue)=> void;
    errors: {[K:string]:string[]}
}

const Form:React.FunctionComponent<Props> = (props)=>{
    const formData = props.value;
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e)=>{
        e.preventDefault();
        props.onSubmit(e);
    }
    const onInputChange = (name:string,value:string)=>{
        const newFormValue = {...formData, [name]:value};
        props.onChange(newFormValue)
        console.log(name,value)
    }
    // key 是为了消除警告
    return (
        <form onSubmit={onSubmit}>
            {props.fields.map( f =>
                <div key={f.name}>
                    {f.label}
                    <Input type={f.input.type} value={formData[f.name]}
                        onChange={(e) => onInputChange(f.name, e.target.value)}
                        //还可以用bind onChange={onInputChange.bind(null,f.name)}
                    />
                    <div>
                        {props.errors[f.name]}
                    </div>

                </div>
            )}
            <div>
                {props.buttons}
            </div>
        </form>
    )
}

export default Form;