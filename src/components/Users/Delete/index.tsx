import * as React from 'react';
import UserService from '../../../services/user-service';

import { Button, Container, IconButton, Modal, Paper, Typography, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteModal = (props: any) =>
{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDelete = (event: any) =>
    {
        UserService.doDeleteCollaborator(props.id).then((res) => {
            window.location.reload();
        })
    }

    return (
        <>
            <IconButton aria-label="edit" onClick={handleOpen}>
				<DeleteIcon />
			</IconButton>

            <Modal open={open} onClose={handleClose}>
                <Container component='main' maxWidth="xs" sx={{ position: 'absolute', top: '20%', left: '35%' }}>
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} >
                        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
                            Delete User
                        </Typography>
                        <Typography>
                            Tem certeza que deseja deletar este usuario?
                        </Typography>

                        <Button type='submit' variant="contained" color="error" fullWidth startIcon={<DeleteIcon />} sx={{ mt: 2 }} onClick={handleDelete} >
                            DELETE
                        </Button>

                    </Paper>
                </Container>
            </Modal>
        </>
    )
}

export default DeleteModal;