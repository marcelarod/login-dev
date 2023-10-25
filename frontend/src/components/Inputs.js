import { useState } from 'react';
import Eye from './Eye';

export default function Inputs(props) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }
    return (
        <div className="input-box">
            <label for={props.for}>{props.label}<i>*</i></label>
            <span id="icon" className="material-icons">{props.icon}</span>
            <input maxlength={props.tamanho} className="input" name={props.name} id={props.id} type={isPasswordVisible ? 'text' : 'password'} placeholder={props.phrase} />
            <Eye css={props.css}
                isPasswordVisible={isPasswordVisible}
                togglePasswordVisibility={togglePasswordVisibility}
            />
        </div>
    );
}