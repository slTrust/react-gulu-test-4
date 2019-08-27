import * as React from "react";
import {ReactFragment} from "react";
import Input from "../input/input";
import classes from "../helpers/classes";
import './form.scss';

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
    errors: {[K:string]:string[]};
    errorsDisplayMode?: 'first' | 'all';
    transformError?: (message:string) => string;
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

    const transformError = (message: string)=>{
        const map:any = {
        required:'必填',
        minLength:'太短',
        maxLength:'太长',
    };
    return props.transformError && props.transformError(message) || map[message] || '未知错误'
}

    return (
        <form className="fui-form" onSubmit={onSubmit}>
            <table className="fui-form-table">
                <tbody>
                    {props.fields.map( f =>
                        <tr className={classes('fui-form-tr')} key={f.name}>
                            <td className={classes('fui-form-td')}>
                                <span className="fui-form-label">{f.label}</span>
                            </td>
                            <td className={classes('fui-form-td')}>
                                <Input type={f.input.type}
                                       value={formData[f.name]}
                                       onChange={(e) => onInputChange(f.name, e.target.value)}
                                    //还可以用bind onChange={onInputChange.bind(null,f.name)}
                                />
                                <div className="fui-form-error">
                                    {props.errors[f.name] ?
                                        (props.errorsDisplayMode ==='first' ?
                                            transformError!(props.errors[f.name][0]):
                                            props.errors[f.name].map(transformError!).join(', ')):
                                        <span>&nbsp;</span>
                                    }
                                </div>
                            </td>
                        </tr>
                    )}
                    <tr className="fui-form-tr">
                        <td className="fui-form-td"></td>
                        <td className="fui-form-td">
                            {props.buttons}
                        </td>
                    </tr>
                </tbody>

            </table>
        </form>
    )
}

Form.defaultProps = {
    errorsDisplayMode:'first'
}

export default Form;