import Header from '../header/index'
import style from './cardhome.module.css';

import { AiFillGithub } from 'react-icons/ai';

export default function Cardhome() {
  
  return (
      <div className={style.divMain}>
        <Header/>
        <div className={style.text}>
          <h1>Hello, nest!</h1>
          <h4>A progressive Node.js framework for building efficient, reliable and scalable server-side applications.</h4>
      </div>
      <div className={style.buttonswrapper}>
          <a className={style.btnprimary}>Documentation</a>
          <a className={style.btnsecondary}><AiFillGithub size={20}/> Source code</a>
      </div>
      </div>
  );
}
