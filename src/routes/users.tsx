import CssBaseline  from '@mui/material/CssBaseline';
import UsersPage from '../pages/users';
import Theme from '../Theme';

export default function Users()
{
    return (
        <Theme>
            <CssBaseline />
            <UsersPage />
        </Theme>
    );
}