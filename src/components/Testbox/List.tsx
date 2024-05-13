import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import BadgeIcon from '@mui/icons-material/Badge';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { tokens } from "../../theme";
import {useTheme} from '@mui/material';
import ViewCollapse from './ViewCollapse.tsx';
import AddCollapse from './AddCollapse.tsx';

function NestedList() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode);

  const [openStudents, setOpenStudents] = React.useState(false);

  const [openStaff, setOpenStaff] = React.useState(false);

  const [openGuardians, setOpenGuardians] = React.useState(false);
  
  const handleClickStudents = () => {
    setOpenStudents(!openStudents);
  }
  const handleClickStaff = ()=>{
      setOpenStaff(!openStaff);
  }
  const handleClickGuardians = () =>{
      setOpenGuardians(!openGuardians);
    }

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, color: colors.grey[100]}}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClickStudents}>
        <ListItemIcon>
          <SupervisedUserCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Students" />
        {openStudents ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openStudents} timeout="auto" unmountOnExit>
      <AddCollapse tag= "Add Students" to= "/form"/>
      <ViewCollapse tag="View Student" to="/team"/>
      </Collapse>
      <ListItemButton onClick={handleClickStaff}>
        <ListItemIcon>
          <BadgeIcon />
        </ListItemIcon>
        <ListItemText primary="Staff" />
        {openStaff ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openStaff} timeout="auto" unmountOnExit>
      <AddCollapse tag= "Add Staff" to="/form"/>
      <ViewCollapse tag="View Staff" to="/contacts"/>
      </Collapse>
      <ListItemButton onClick={handleClickGuardians}>
        <ListItemIcon>
          <SupervisorAccountIcon />
        </ListItemIcon>
        <ListItemText primary="Guardians" />
        {openGuardians ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openGuardians} timeout="auto" unmountOnExit>
      <ViewCollapse tag="View Guardians"/>
      </Collapse>
    </List>
  );
}

export default NestedList