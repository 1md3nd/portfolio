import React, { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText} from "@mui/material";

function Menu() {
    const [sideNavActive, setSideNavActive] = useState(false);
    
    const toggleSideNav = () => {
        setSideNavActive(!sideNavActive);
      };
    return (
    <Box  style={{backgroundColor:`var(--light-grey)`}}>
        <IconButton
  edge="end"
  color="inherit"
  aria-label="menu"
  onClick={toggleSideNav}
  style={{ padding: 0 ,margin: 0 }} // Remove padding from IconButton
>
  <div style={{ padding: '0 10px', margin: '0'}}>
    <MenuIcon />
  </div>
</IconButton>

        <Drawer
          anchor="right"
          open={sideNavActive}
          onClose={() => setSideNavActive(false)}
          style={{backgroundColor:`var(--light-grey)`}}
        >
          <List>
            <ListItem component="a" href="/about">
              <ListItemText primary="About Me" />
            </ListItem>
            <ListItem component="a" href="#projects">
              <ListItemText primary="Projects" />
            </ListItem>
            <ListItem component="a" href="https://www.github.com/1md3nd">
              <ListItemText primary="Github" />
            </ListItem>
            <ListItem component="a" href="https://www.linkedin.com/in/1md3nd">
              <ListItemText primary="LinkedIn" />
            </ListItem>
            <ListItem component="a" href="https://www.leetcode.com/1md3nd">
              <ListItemText primary="Leetcode" />
            </ListItem>
            <ListItem
              component="a"
              href="https://www.codechef.com/users/arcreator_07"
            >
              <ListItemText
                primary="Codechef"
                secondary={<span>&#8599;</span>}
              />
            </ListItem>
            {/* You might need to replace {% url 'contact' %} with the actual URL */}
            <ListItem component="a" href="{% url 'contact' %}">
              <ListItemText primary="Contact Me" />
            </ListItem>
          </List>
        </Drawer>
    </Box>
  );
}

export default Menu;
