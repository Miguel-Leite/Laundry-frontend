import { 
    FormAuth,
    Logo
} from './styles'
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import img from '../../assets/auth.jpg';

export function Auth () {
    return (
        <>
            <FormAuth>
                <div className='imgBx'>
                    <img src={img} alt='Image Sign In' />
                </div>
                <div className='contentBx'>
                    <h2>Login</h2>
                    <form>
                        <div className='inputBx'>
                            <span>Username</span>
                            <input type='text' />
                        </div>
                        <div className='inputBx'>
                            <span>Password</span>
                            <input type='text' />
                        </div>
                        <div className='remember'>
                            <label><input type='checkbox' /> Remember me</label>
                        </div>
                        <div className='inputBx'>
                            <input type='submit' value='Sign In' />
                        </div>
                        <div className='inputBx'>
                            <p>Don't have an account? <a href='#'>Sign Up</a> </p>
                        </div>
                    </form>
                </div>
            </FormAuth>
        </>
    )
}