import { 
    FormAuth
} from './styles';

import Image from '../../assets/offers4.png';

export function Auth () {
    return (
        <>
            <FormAuth t='owl'>
                <div className='imgBx'>
                    <img src={Image} alt='Image Sign In' />
                </div>
                <div className='contentBx'>
                    <form className='formBx'>
                        <h2>Entrar</h2>
                        <div className='inputBx'>
                            <span>E-mail</span>
                            <input type='text' />
                        </div>
                        <div className='inputBx'>
                            <span>Senha</span>
                            <input type='text' />
                        </div>
                        <div className='remember'>
                            <label><input type='checkbox' /> Lembra-me neste despositivo</label>
                        </div>
                        <div className='inputBx'>
                            <input type='submit' value='Entrar' />
                        </div>
                        <div className='inputBx'>
                            <p>Esqueceste a sua senha? <a href='#'>Clique aqui</a> </p>
                        </div>
                    </form>
                </div>
            </FormAuth>
        </>
    )
}