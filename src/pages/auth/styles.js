import styled from "styled-components";
import img from '../../assets/offers4.png';

export const FormAuth = styled.div`
    width: 100%;
    max-width: 100%;
    height:100vh;
    max-height: 100%;
    form { 
        width: 100%;
        height: 100%;
        background: var(--form-ws);
        padding: 20px 20px 60px 20px;
        border-radius: 5px;
        box-shadow: 0 0px 25px var(--light-ws);
        label {
            color: var(--label-login-ws);
            margin-bottom: 15px;
        }
        div {
            margin: 20px 0px;
            input {
                padding: 15px;
                background-color: var(--input-login-ws);
                border: none !important;
                border-bottom: 1px solid transparent !important;
                color: var(--light-ws) !important;
                transition: border .2s ease;
                border-radius: 0 !important;
                &:focus {
                    background-color: var(--input-login-ws);
                    box-shadow: none;
                    border-bottom: 1px solid var(--button-login-ws) !important;
                }
                &:placeholder {
                    color: var(--label-login-ws) !important;
                }
            }
        }
        button {
            width: 100%;
            background-color: var(--button-login-ws);
            color: var(--light-ws);
            transition: filter .2s ease;
            &:hover {
                color: var(--light-ws);
                filter: brightness(0.9);
            }
        }
        div:first-of-type {
            margin-bottom: 30px;
        }
    }
`;

export const Logo = styled.div`
    margin-top: 20%;
    display: flex;
    align-item: center;
    justify-content: center;
    margin-bottom: 20px;
`;