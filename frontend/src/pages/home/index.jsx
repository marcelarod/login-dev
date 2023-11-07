import { useState } from 'react';

import Header from '../../components/header/index'
import style from './home.module.css';

import { AiFillGithub } from 'react-icons/ai';
import Cardhome from '../../components/cardhome';
import Highlight from '../../components/highlight';

export default function Home() {
  
  return (
    <div className={style.divMain}>
      <Cardhome/>
      <Highlight/>
    </div>
  );
}
