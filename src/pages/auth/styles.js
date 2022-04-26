import styled from "styled-components";

export const FormAuth = styled.div`
    width: 100%;
    height:100%;
    max-height: 100vh;
    position: relative;
    diplay: flex;

    .imgBx {
        position: relative;
        width: 50%;
        height: 100%;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(225deg,var(--border-ws),var(--icon-ws));
            z-index: 1;
            mix-blend-mode: screen;
        }
        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;

        }
    }
    .contentBx {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;

        .formBx {
            width: 50%;

            h2 {
                color: var(--border-ws);
                font-weight: 600;
                font-size: 1.5em;
                text-transform: uppercase;
                margin-bottom: 20px;
                border-bottom: 4px solid var(--border-ws);
                display: inline-block;
                letter-spacing: 1px;
            }
            .inputBx {
                margin-bottom: 20px;
                span {
                    font-size: 16px;
                    margin-bottom: 5px;
                    display: inline-block;
                    color: var(--border-ws);
                    font-weight: 300;
                    font-size: 16px;
                    letter-spacing: 1px;
                }
                input {
                    width: 100%;
                    padding: 10px 20px;
                    font-weight: 400;
                    outline: none;
                    border: 1px solid var(--input-border-ws);
                    font-size: 16px;
                    letter-spacing: 1px;
                    color: var(--input-border-ws);
                    background: transparent;
                    border-radius: 30px;
                }
                input[type="submit"] {
                    background-color: var(--border-ws);
                    color: white;
                    outline: none;
                    border: none;
                    font-weight: 500;
                    cursor: pointer;
                    transition: background-color .2s ease;
                    &:hover {
                        filter: brightness(.9);
                    }
                }

                p {
                    color: var(--border-ws);
                    a {
                        color: var(--icon-ws);
                    }
                }
            }
            .remember {
                margin-bottom: 10px;
                color: var(--border-ws);
                font-weight: 400;
                font-size: 14px;
            }
        }
    }

    @media(max-width: 768px) {
        .imgBx {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .contentBx {
            display: flex;
            justify-content: center;
            align-center: center;
            width: 100%;
            height: 100%;
            z-index: 1;

            .formBx {
                width: 100%;
                padding: 40px;
                background: rgb(255 255 255 / 0.9);
                margin: 50px;
            }
        }
    }
`;
