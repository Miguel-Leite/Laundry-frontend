import { useState, useEffect, ChangeEvent } from 'react';

import { 
    FormAuth
} from './styles';

import Image from '../../assets/offers4.png';

export function Auth () {

const [ data, setData ] = useState({
    email: '',
    password: ''
});

function handleInputChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
    console.log(data)
  }
  function handleSelectChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
    console.log(data)
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
  }
    return (
        <>
            <FormAuth t='owl'>
                <div className='imgBx'>
                    <img src={Image} alt='Image Sign In' />
                </div>
                <div className='contentBx'>
                    <form className='formBx' onSubmit={handleFormSubmit}>
                        <h2>Entrar</h2>
                        <div className='inputBx'>
                            <span>E-mail</span>
                            <input 
                                id='email'
                                type='text' 
                                name='email'
                                value={data.email}
                                onChange={handleInputChange} 
                            />
                        </div>
                        <div className='inputBx'>
                            <span>Senha</span>
                            <input
                                id='password' 
                                type='password' 
                                name='password'
                                values={data.password}
                                onChange={handleInputChange} 
                            />
                        </div>
                        <div className='remember'>
                            <label>
                                <input type='checkbox' /> 
                                    Lembra-me neste despositivo
                            </label>
                        </div>
                        <div className='inputBx'>
                            <input 
                                id='btnLogin'
                                type='submit' 
                                value='Entrar'
                                className='btnLogin' 
                            />
                        </div>
                        <div className='inputBx'>
                            <p>Esqueceste a sua senha? 
                                <a href='#'>Clique aqui</a> 
                            </p>
                        </div>
                    </form>
                </div>
            </FormAuth>
        </>
    )
}