import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {Link} from "react-router-dom";

function ViewCollapse(props){

return(
<List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <Link to={props.to} />
            <ListItemIcon>
              <RemoveRedEyeIcon />
            </ListItemIcon>
            <ListItemText primary= {props.tag}/>
          </ListItemButton>
        </List>
)
}

export default ViewCollapse;