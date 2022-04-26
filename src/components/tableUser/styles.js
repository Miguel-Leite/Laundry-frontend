import styled from 'styled-components';

export const Table = styled.table`
    border-collapse: collapse;
    box-shadow: 0 5px 10px #e1e5ee;
    background-color: white;
    text-align: left;
    overflow: hidden;
    margin: 30px auto auto auto;
`;

export const Thead = styled.thead`
    box-shadow: 0 5px 10px #e1e5ee;
    th {
        padding: 1rem 2rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        font-size: 0.7rem;
        font-weight: 900;
    }
`;

export const Tbody = styled.tbody`
    td {
        padding: 1rem 2rem;
        a {
            text-decoration: none;
            color: var(--border-ws);
        }
    }
    .status {
        border-radius: 0.2rem;
        background-color: red;
        padding: 0.2rem 1rem;
        text-align: center;

        &-success {
            background-color: #58df9b;
            color: var(--white-ws);
        } 
        &-danger {
            background-color: #df5d58;
            color: var(--white-ws);
        }
        &-paid {
            background-color: #c8e6c9;
            color: #388e3c;
        }
    }
    button {
        margin: 0px 5px;
    }
    tr:nth-child(even) {
        background-color: #f4f6fb;
    }
`;
