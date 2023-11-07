import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom"
import Swal from "sweetalert2";

import Image from '../../components/image/image';
import Spinner from '../../components/spinner/index';
import ImageBox from '../../assets/nestjs_logo.png'
import { api } from "../../services/api";

import style from './login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState([])

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
      let response = await api.post('/users/signin',
        {
          "email": email,
          "password": password
        }
      )

      if (response.status == 200) {
        Toast.fire({
          icon: 'success',
          title: 'Login efetuado com sucesso!'
        })
        setEmail('')
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
              <h1>Login</h1>
              <div className={style.inputsContainer}>
                <p>Email:</p>
                <input type="text"
                  name="email"
                  onChange={e =>{ 
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
                    onChange={e => {
                      setPassword(e.target.value)
                      setPasswordError('')
                    }}
                    value={password}
                  />
                {passwordError ? (
                  <div className="inputError">{passwordError}</div>
                  ) : null}

                <div className={style.buttons}>
                  <button className={style.divButton} onClick={() => onSubmit()} type="button">Entrar</button>
                  <button className={style.divButtonRegister} type="button" onClick={() => navigate('/register')}>Registrar</button>
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
