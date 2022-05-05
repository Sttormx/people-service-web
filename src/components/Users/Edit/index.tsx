import * as React from 'react';
import UserService from '../../../services/user-service';

import { Button, Container, IconButton, Modal, Paper, Typography, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

const EditModal = (props: any) =>
{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //
    let fetched = false;
    const [defaultUserInfo, setDefaultInfo] = React.useState({ name: '', cpf: '', cnpj: '', rg: '', email: '' });
    const [userInfo, setUserInfo] = React.useState({});

    React.useEffect(() => 
    {
        if (!fetched)
        {
            fetched = true;
            setTimeout(() => 
            {
                UserService.getCollaborator(props.id).then((res) =>
                {
                    if (res.data)
                    {
                        setDefaultInfo(res.data);
                        setUserInfo(res.data);
                    }        
                });
            }, 100)
        }
    }, []);

    const handleInputChange = (e: any) => 
    {
        const { name, value } = e.target;
        if (name == 'name')
        {
            setUserInfo(
            {
                ...userInfo,
                'name': value,
            });  
        }
        else
        {
            setUserInfo(
            {
                ...userInfo,
                [name]: value,
            });
        }
    };

    const handleSubmit = (event: any) =>
    {
        event.preventDefault();
        UserService.doUpdateCollaborator(props.id, userInfo).then((res) => {
            window.location.reload();
        })
    }

    return (
        <>
            <IconButton aria-label="edit" onClick={handleOpen}>
				<EditIcon />
			</IconButton>

            <Modal open={open} onClose={handleClose}>
                <Container component='main' maxWidth="xs" sx={{ position: 'absolute', top: '20%', left: '35%' }}>
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} >
                        <Typography component="h1" variant="h5">
                            Edit User
                        </Typography>
                        <Typography>
                            Edit user information. 
                        </Typography>

                        <form onSubmit={handleSubmit}>
                            <TextField margin="normal" required fullWidth label="Full Name" name="name" defaultValue={ defaultUserInfo.name } onChange={handleInputChange} />
                            <TextField margin="normal" required fullWidth label="Email" name="email" defaultValue={ defaultUserInfo.email } onChange={handleInputChange} />
                            <TextField margin="normal" required fullWidth label="CPF" name="cpf" defaultValue={ defaultUserInfo.cpf } onChange={handleInputChange} />
                            <TextField margin="normal" required fullWidth label="CNPJ" name="cnpj" defaultValue={ defaultUserInfo.cnpj } onChange={handleInputChange} />
                            <TextField margin="normal" required fullWidth label="RG" name="rg" defaultValue={ defaultUserInfo.rg } onChange={handleInputChange} />
                            
                            <Button type='submit' variant="contained" color="success" fullWidth startIcon={<EditIcon />} sx={{ mt: 2 }} >
                                ATUALIZAR
                            </Button>
                        </form>
                    </Paper>
                </Container>
            </Modal>
        </>
    )
}

export default EditModal;