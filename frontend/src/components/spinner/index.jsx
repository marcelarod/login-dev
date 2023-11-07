import React from "react";
import {ImSpinner2} from 'react-icons/im';

import style from "./spinner.module.css";


export default function Spinner() {

    return (
     <div className={style.loading}>
         <i><ImSpinner2 className={style.spinnerLoading}/></i>
    </div>
    )
}