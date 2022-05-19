import styled from 'styled-components';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { default as StackMaterial } from '@mui/material/Stack';


const Stack = styled(StackMaterial)`
position: absolute;
left: 0;
right: 0;
top: 0;
justify-content: center;
bottom: 0;
align-items: center;
`;

const AddButton = styled(Button)`
    align-self:center;
`;

const TitleForm = styled.h1`
`;

const WrapperForm = styled.div`
    
`;

const Input = styled(TextField)`

`;



export {
    Stack,
    AddButton,
    WrapperForm,
    Input,
    TitleForm
}