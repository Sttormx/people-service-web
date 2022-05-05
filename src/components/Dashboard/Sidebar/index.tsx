import { Divider, List, Toolbar, Typography } from '@mui/material';
import { Dashboard as DashboardIcon, Folder as FolderIcon } from '@mui/icons-material';
import ListItemLink from '../../ListItemLink';
import PagesList from '../PagesList';
import LogOut from '../Logout';

import { DrawerProps } from './types';
import { CustomDrawer } from './styles';

export default function SideBar(props: DrawerProps)
{
    return (
        <CustomDrawer width={props.width} variant="permanent" anchor="left">
			<Toolbar sx={{ alignItems: 'center' }}>
				<Typography align='center' variant="subtitle1" sx={{ mt: 1, ml: 5 }} >
					AREOPAGUS
				</Typography>
			</Toolbar>
			<Divider />
			<List>
				<ListItemLink to="/dashboard" primary="Dashboard" icon={ <DashboardIcon /> } />
			</List>
			<Divider />
			<List>
				<PagesList />
			</List>
			<Divider />
			<List>
				<ListItemLink to="/repositories" primary="Repositories" icon={ <FolderIcon /> } />
			</List>
			<Divider />
			<Toolbar sx={{ flexGrow: 1 }} />
			<Divider />
			<LogOut />
        </CustomDrawer>
    );
}