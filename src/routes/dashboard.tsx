import * as React from 'react';
import CssBaseline  from '@mui/material/CssBaseline';
import DashboardPage from '../pages/dashboard';
import Theme from '../Theme';

import { useNavigate } from "react-router-dom";
import { useSelector, RootStateOrAny } from 'react-redux';

export default function Dashboard()
{
    const navigate: any = useNavigate();
    const [isLoggedIn] = React.useState(useSelector((state: RootStateOrAny) => state.auth.auth));

    React.useEffect(() => 
    {
        if (!isLoggedIn)
            return navigate('/login');
    })

    return (
        <Theme>
            <CssBaseline />
            <DashboardPage />
        </Theme>
    );
}