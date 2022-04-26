import { Table, Thead, Tbody } from './styles';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
export function TableUser () {
    return (
        <>
            <Table>
                <Thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Contacto</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </Thead>
                <Tbody>
                    <tr>
                        <td>1</td>
                        <td>Miguel</td>
                        <td>miguelleite200leite@gmail.com</td>
                        <td>+244941398739</td>
                        <td><p className='status status-success'>Ativo</p></td>
                        <td>
                            <button className='btn btn-info'>
                                <AiOutlineEdit color='white' />
                            </button>
                            <button className='btn btn-danger'>
                                <AiOutlineDelete color='white' />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Miguel Leite</td>
                        <td>miguelleite200leite@gmail.com</td>
                        <td>+244941398739</td>
                        <td><p className='status status-danger'>Inativo</p></td>
                        <td>
                            <button className='btn btn-info'>
                                <AiOutlineEdit color='white' />
                            </button>
                            <button className='btn btn-danger'>
                                <AiOutlineDelete color='white' />
                            </button>
                        </td>
                    </tr>
                </Tbody>
            </Table>
        </>
    )
}