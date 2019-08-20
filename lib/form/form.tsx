import * as React from "react";
import {ReactFragment} from "react";

interface Props {
    value: { [K: string]: any };
    fields: Array<{name:string,label:string,input:{type:string}}>;
    buttons: ReactFragment;
}

const Form:React.FunctionComponent<Props> = (props)=>{
    // key 是为了消除警告
    return (
        <div>
            {props.fields.map( f =>
                <div key={f.name}>
                    {f.label}
                    <input type={f.input.type}/>
                </div>
            )}
            <div>
                {props.buttons}
            </div>
        </div>
    )
}

export default Form;