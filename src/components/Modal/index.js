import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Modal from '@mui/material/Modal';
import { Box } from './styles';


const ModalComponent = forwardRef(function ({ children }, ref) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useImperativeHandle(ref, () => {
        return {
            handleOpen,
            handleClose
        }
    }, []);


    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box>
                {children}
            </Box>
        </Modal>
    )


})

export default ModalComponent;