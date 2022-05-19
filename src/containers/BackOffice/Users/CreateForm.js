import React, { useState } from 'react';
import { WrapperForm } from './styles';
import {  TitleForm } from './styles';
import Button from '@mui/material/Button';
import useValidator from '../../../Hooks/validator';
import { userValidation } from '../../../validations';
import { useDispatch } from 'react-redux';
import { createUser } from '../../../slices/users.slice';
import Input from '../../../components/Input';


const defaults = {
    firstname: '',
    lastname: '',
    company: '',
    email: ''
};


const CreateForm = ({handleCreate}) => {

    const { validation,errors } = useValidator(userValidation.createUser);
    const dispatch = useDispatch();

    const [form, setForm] = useState(defaults);

    const handlechange = (event) => {
        const { value } = event.target;
        const id = event.target.getAttribute('id');
        setForm(state => ({
            ...state,
            [id]: value
        }));
    }

    const handleSubmit = () => {
        const validate = validation(form);
        if (!validate.error) {
            dispatch(createUser(form)).unwrap().then(() => {
                setForm(defaults);
                handleCreate();
            });
        }
    }


    return (<WrapperForm>
        <TitleForm> Creación de usuario </TitleForm>
        <Input errors={errors}  fullWidth value={form.firstname} onChange={handlechange} id='firstname' margin="normal" label="Nombres" />
        <Input errors={errors} fullWidth value={form.lastname} onChange={handlechange} id='lastname' margin="normal" label="Apellidos" />
        <Input errors={errors} fullWidth value={form.company} onChange={handlechange} id='company' margin="normal" label="Empresa" />
        <Input errors={errors} fullWidth value={form.email} onChange={handlechange} id='email' margin="normal" label="Email" />

        <Button onClick={handleSubmit} variant="contained"> Guardar</Button>
    </WrapperForm>)
}

export default CreateForm;