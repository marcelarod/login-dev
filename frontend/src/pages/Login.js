import React from 'react';
import Title from '../components/Title';
import Inputs from '../components/Inputs';
import Button from '../components/Button';
import Image from '../components/Image';
import ImageBox from '../assets/pexels-irina-iriser-1420016.jpg'
import './StyleLogin.css';

export default function Login() {
  return (
    <div className='divMain'>
      <section className='boxLeft'>
        <form>

          <Title
            title="Faça seu login"
            subtitle="Entre com suas informações de cadastro"
          />

          <Inputs
            for="email"
            label="Email"
            type="email"
            tamanho='80'
            name="email"
            id="email"
            phrase="Digite seu email"
            icon="markunread"
            css={{display: "none"}}
          />

          <Inputs
            for="pswd"
            label="Senha"
            type="password"
            tamanho='80'
            name="pswd"
            id="pswd"
            phrase="Digite sua senha"
            icon="lock_person"
          />

          <Button
           name='button'
           id='button'
           type='reset'
           content="Login"
           p="Ainda não possui conta?"
           span="Cadastre-se!"
           target="_blank"
          />

        </form>
      </section>

      <section className="boxRight">
        <Image imageLink ={ImageBox} altImage="Sakura-01"/>
      </section>

    </div>

  );
}
