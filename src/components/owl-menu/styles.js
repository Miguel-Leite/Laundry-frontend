import styled from 'styled-components';

export const OwlItem = styled.div`
    border: 3px solid var(--light-ws);
    padding: 25px 20px;
    border-radius: 6px;
    background-color: var(--primary-ws);
    color: white;
    display: flex;
    justify-content: space-between;
    transition: background-color .2s ease;  
    &:hover {
        border: 3px solid var(--light-ws);
        background-color: var(--border-ws);
        a {
           color: var(--white-ws); 
        }
    }
`;

export const Text = styled.div`
    h4 {
        font-weight: 700;
        font-size: 20px;
        color: var(--white-ws);
    }
    p {
        margin: 0;
        font-size: 11px;
        color: var(--icon-ws)
    }
    a {
        text-decoration: none;
        color: var(--border-ws);
        transition: color .2s ease;
        &:hover {
            color: var(--white);
        }
    }
`;

export const Icon = styled.div`
    padding: 5px;
    display: flex;
    width: 46px;
    height: 46px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: var(--border-ws);
    svg {
        font-size: 28px;
        color: var(--icon-ws)
    }
`;