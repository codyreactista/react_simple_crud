import AddBoxIcon from "@mui/icons-material/AddBox";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

export default function LeftMenu(props) {
  function handleListItemClick(item) {
    props.handleMenu(item);
  }

  return (
    <List>
      <ListItem
        selected={props.valueItem === props.items.WELCOME}
        button
        onClick={() => handleListItemClick(props.items.WELCOME)}
      >
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Welcome" />
      </ListItem>
      <ListItem
        selected={props.valueItem === props.items.USERSLIST}
        button
        onClick={() => handleListItemClick(props.items.USERSLIST)}
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="User Lists" />
      </ListItem>
      <ListItem
        selected={props.valueItem === props.items.USERFORM}
        button
        onClick={() => handleListItemClick(props.items.USERFORM)}
      >
        <ListItemIcon>
          <AddBoxIcon />
        </ListItemIcon>
        <ListItemText primary="Add User" />
      </ListItem>
    </List>
  );
}
