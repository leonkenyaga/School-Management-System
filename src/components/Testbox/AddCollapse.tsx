import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {Link} from "react-router-dom";

function AddCollapse(props){

return(
<List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <Link to ={props.to} />
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary= {props.tag} />
          </ListItemButton>
        </List>
)
}

export default AddCollapse;