import React, { useCallback, useMemo } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



const TableComponent = ({ headers = [], data = [], handleDelete }) => {

    const getHeaders = useCallback(() => {
        return (
            <TableHead>
                <TableRow>
                    {
                        headers.map(header => {
                            return <TableCell>{header}</TableCell>
                        })
                    }

                </TableRow>
            </TableHead>
        )
    }, [data]);
    console.log(data);

    const getData = useMemo(() => {
        return (<TableBody>

            {data.map((user) => (
                <TableRow
                    key={user.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell>{user.firstname}</TableCell>
                    <TableCell>{user.lastname}</TableCell>
                    <TableCell>{user.company}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell><Fab onClick={() => handleDelete(user.id)} color="primary" aria-label="add">
                        <DeleteForeverIcon />
                    </Fab></TableCell>
                </TableRow>
            ))}
        </TableBody>)
    }, [data]);


    return (
        <Table sx={{ width: '90%' }} aria-label="simple table">
            {getHeaders()}
            {getData}

        </Table>
    )
}

export default TableComponent;