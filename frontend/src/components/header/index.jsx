import { useNavigate } from "react-router-dom"
import logo from '../../assets/logo-small.png'
import { AiFillGithub,AiFillLinkedin } from 'react-icons/ai';
import { RiTwitterXFill } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';

import style from "./header.module.css"

export default function Header(props) {

    const navigate = useNavigate()
   
    return (
        <div className={style.containerHeader}>
            <div className={style.logo}>
                <img alt='logo' src={logo}/>
            </div>
            <div className={style.options}>
              <a>DOCUMENTATION</a> 
              <a>ENTERPRISE</a> 
              <a>COURSES</a> 
              <a>DEVTOOLS</a> 
              <div>
                <a><AiFillGithub size={22}/> </a> 
                <a><RiTwitterXFill size={22}/> </a> 
                <a><AiFillLinkedin size={22}/> </a> 
                <a><FiLogOut onClick={()=> navigate('/')} color="white" size={22}/> </a> 
              </div>
            </div>
        </div>
    )
}