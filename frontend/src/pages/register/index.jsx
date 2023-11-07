import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom"
import Swal from "sweetalert2";

import Image from '../../components/image/image';
import Spinner from '../../components/spinner/index';
import ImageBox from '../../assets/nestjs_logo_white.png'
import { api } from "../../services/api";

import style from './register.module.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState([])

  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');


  const navigate = useNavigate()

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    timerProgressBar: true,
    showConfirmButton: false,
    timer: 3000,
    width: 400,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  function validate() {
    let validated = true;
    if (!name) {
      setNameError('Insira um nome');
      validated = false;
    }

    if (!email) {
      validated = false;
      setEmailError('Insira um email');
    }

    if (!password) {
      validated = false;
      setPasswordError('Insira uma senha');
    }
    return validated
  }

  async function onSubmit() { 
    try {
      const isValid = validate();

      if (!isValid) {
        Toast.fire({
          icon: 'error',
          title: 'Campos necessários!',
        });
        return;
      }

      setLoading(true)
      let response = await api.post('/users/signup',
        {
          "email": email,
          "name": name,
          "password": password
        }
      )

      if (response.status == 200) {
        Toast.fire({
          icon: 'success',
          title: 'Registro efetuado com sucesso!'
        })
        setEmail('')
        setName('')
        setPassword('')

      }
      navigate('/home')
    } catch (err) {
      console.log(err)
      Toast.fire({
        icon: 'error',
        title: `${err.response.data.message}`
      })

    }
    setLoading(false)
  }
  
  return (
    <div className={style.divMain}>
      {loading == true ? (
        <div className="spinner">
          <Spinner animation="border" />
        </div>
      ) : (
      <div></div>)}

      <section className={style.boxLeft}>
        <form>
          <>
              <h1>Register</h1>
              <div className={style.inputsContainer}>
                <p>Name:</p>
                  <input type="text"
                    name="name"
                    onChange={e => {
                      setNameError('')
                      setName(e.target.value)
                    }}
                    value={name}
                />
                {nameError ? (
                  <div className="inputError">{nameError}</div>
                  ) : null}
                <p>Email:</p>
                <input type="text"
                  name="email"
                  onChange={e => {
                    setEmail(e.target.value)
                    setEmailError('')
                  }}
                  value={email}
                /> 
                {emailError ? (
                  <div className="inputError">{emailError}</div>
                  ) : null}
                <p>Senha:</p>
                  <input
                    type="password"
                    name="senha"
                    onChange={(e) =>{
                      setPasswordError('')
                      setPassword(e.target.value)
                    }}
                    value={password}
                  />
                   {passwordError ? (
                  <div className="inputError">{passwordError}</div>
                  ) : null}
               
                <div className={style.buttons}>
                  <button className={style.divButton} onClick={() => navigate('/')} type="button">Login</button>
                  <button className={style.divButtonRegister} onClick={() => onSubmit()} type="button">Registrar</button>
                </div>
              </div>
            </>
        </form>
      </section>
      <section className={style.boxRight}>
        <Image imageLink ={ImageBox} altImage="nestjs"/>
      </section>
    </div>

  );
}
