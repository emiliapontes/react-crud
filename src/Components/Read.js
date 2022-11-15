import React, { useState, useEffect} from 'react'
import { Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios';


export default function Read() {


    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://637317e0348e94729902da91.mockapi.io/GatosGordos`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
    
    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
}

const getData = () => {
    axios.get(`https://637317e0348e94729902da91.mockapi.io/GatosGordos/`)
        .then((getData) => {
             setAPIData(getData.data);
         })
}


const onDelete = (id) => {
    axios.delete(`https://637317e0348e94729902da91.mockapi.io/GatosGordos/${id}`)
    .then(() => {
        getData();
    })

}
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Sobrenome</Table.HeaderCell>
                        <Table.HeaderCell>Contrato</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                        <Table.Row>
                            <Table.Cell>{data.firstName}</Table.Cell>
                            <Table.Cell>{data.lastName}</Table.Cell>
                            <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                            <Link to='/update'>
                            <Table.Cell> 
                                <Button onClick={() => setData(data)}>Update</Button>
                            </Table.Cell>
                            </Link>

                            <Table.Cell>
                                <Button onClick={() => onDelete(data.id)}>Delete</Button>
                            </Table.Cell>

                            </Table.Row>
                    )})}
                    </Table.Body>
            </Table>
        </div>
    )
}