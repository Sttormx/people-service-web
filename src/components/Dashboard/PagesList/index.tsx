import * as React from 'react';

import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ManageAccounts, ExpandLess, ExpandMore, Group, HistoryEdu, Assignment  } from '@mui/icons-material'
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { TOGGLE_SIDEBAR } from '../../../states/types';
import ListItemLink from '../../ListItemLink';

export default function PagesList()
{
	const collapsed = useSelector((state: RootStateOrAny) => state.preferences.menuEnabled);
	const dispatch = useDispatch();
	const [open, setOpen] = React.useState(collapsed);

	const handleClick = () =>
	{
		setOpen(!open);
		dispatch({ type: TOGGLE_SIDEBAR });
	}

	return (
		<div> 
			<ListItemButton onClick={handleClick}>
				<ListItemIcon>
					<ManageAccounts />
				</ListItemIcon>
				<ListItemText primary="Management" />
					{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={open} >
				<List component="div" disablePadding>
					<ListItemLink to="../users" primary="Users" icon={ <Group /> } isCollapsed />
					<ListItemLink to="../contracts" primary="Contracts" icon={ <HistoryEdu /> } isCollapsed />
					<ListItemLink to="../tasks" primary="Tasks" icon={ <Assignment /> } isCollapsed />
				</List>
			</Collapse>
		</div>
	)
}