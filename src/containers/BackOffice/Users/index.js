import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allUsers, deleteUser } from '../../../slices/users.slice';
import { Stack, AddButton } from './styles';
import { Table } from '../../../components';
import { default as StackNative } from '@mui/material/Stack';
import ModalComponent from '../../../components/Modal';
import CreateForm from './CreateForm';


const Users = () => {

    const dispatch = useDispatch();
    const { list, loading } = useSelector(state => state.users);
    const modalRef = useRef();


    useEffect(() => {
        dispatch(allUsers()).unwrap().catch((rejectedValueOrSerializedError) => {
            console.log(rejectedValueOrSerializedError);
            });
    }, []);


    const handleDelete = (userId) => {
        if (!userId) return;
        dispatch(deleteUser(userId));
    }

    const openForm = () => modalRef.current.handleOpen();



    return (
        <Stack>
            <ModalComponent ref={modalRef} >
                <CreateForm handleCreate={() => modalRef.current.handleClose()} />
            </ModalComponent>
            <StackNative spacing={2} direction="row">
                <h1> Listado de usuarios </h1>
                <AddButton onClick={openForm} size='small' variant="contained">Agregar usuario</AddButton>
            </StackNative>
            <Table
                handleDelete={handleDelete}
                data={list}
                headers={["Nombre", "Apellido", "Empresa", "Email", "Actions"]}
            />
        </Stack>
    )
}

export default Users;