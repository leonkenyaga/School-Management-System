import React from "react";
import { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {Box, IconButton, Typography, useTheme} from '@mui/material';
import {Link} from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContatcsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import NestedList from "../../components/Testbox/List.tsx";



const Item = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem
         active={selected===title} 
         style={{color: colors.grey[100],
        }} 
         onClick={()=> setSelected(title)} 
         icon={icon}
         >
        <Typography>{title}</Typography>
        <Link to={to}/>
        </MenuItem>
    );

};


const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    useEffect(() => {
        setIsCollapsed(isMobile);
      }, [isMobile]);


    
    return (
        <Box sx={{
            "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !important`,
                width: isCollapsed ? (isMobile ? '50px' : '80px') : 'auto',
                
              },
            "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important",
                
            },
            "& .pro-inner-item": {
                
                padding: isCollapsed ? (isMobile ?  "5px 35px 5px 10px !important" :"5px 35px 5px 20px !important" ): 'auto',
                marginRight: isMobile && isMobile ? '10px' : '0', // Adjusted margin for collapsed sidebar on small screens
            },
            "& .pro-inner-item:hover": {
                color: "#868dfb !important"
            },
            "& .pro-menu-item.active" : {
                color: "#6870fa !important"
            },
            
            position: isMobile ? 'fixed' : 'relative', // Add this line
            zIndex: isMobile ? 1000 : 'auto', // Add this line
            height: isMobile ? '100%' : 'auto',
            
            
}}>
            
    
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem 
                    onClick={()=>setIsCollapsed(!isCollapsed)}
                    icon={isCollapsed ? <MapOutlinedIcon/> : undefined}
                    style={{
                        margin: "5px 0 20px 0",
                        color: colors.grey[100],
                    }}
                    >
                        {!isCollapsed && (
                            <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    ADMINS

                                </Typography>
                                <IconButton onClick={()=> setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon/>
                                </IconButton>

                            </Box>
                        )}
                    </MenuItem>
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignContent="center">
                                <img 
                                alt="profile-user"
                                width="80px"
                                height="80px"
                                src={"../../assets/user.png"}
                                style={{cursor: "pointer", borderRadius:"50%"}}
                                />

                            </Box>

                            <Box textAlign="center">
                                <Typography
                                 variant="h2" 
                                 color={colors.grey[100]} 
                                 fontWeight="bold" 
                                 sx={{m:"5px 0 0 0"}}
                                 >
                                    Shanon Wambui
                                    </Typography>
                                <Typography
                                 variant="h5"
                                 color={colors.greenAccent[500]}
                                 >VP Fancy Admin</Typography>

                            </Box>

                        </Box>
                    )}
                    {/*MENU ITEMS */}
                  

                <NestedList />

                </Menu>

            </ProSidebar>

        </Box>
    )
}

export default Sidebar;