import React from "react";
import Box from '@mui/material/Box';
import {Drawer, List, ListItem, ListItemIcon, ListItemText } from  '@mui/material'


const Sidebar = () => {
    const Items = ['Profil', 'Data'];
    return (
        <Drawer variant="permanent" anchor="left">
            <Box sx={{width: 250}}>
                <List>
                    {Items.map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default Sidebar;