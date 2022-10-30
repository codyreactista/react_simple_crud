import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Layout from "./Layout";
import LeftMenu from "./LeftMenu";
import UsersForm from "./UserForm";
import UsersList from "./UserList";
import Welcome from "./Welcome.js";

const theme = createTheme();

function App() {
  const MENU_ITEMS = {
    WELCOME: 0,
    USERSLIST: 1,
    USERFORM: 2,
  };
  const [itemClicked, setItemClicked] = useState(MENU_ITEMS.WELCOME);
  const apiUrl = process.env.REACT_APP_API_URL;

  function handleClick(item) {
    setItemClicked(item);
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout
        left={
          <LeftMenu
            items={MENU_ITEMS}
            handleMenu={handleClick}
            valueItem={itemClicked}
          />
        }
      >
        {itemClicked === MENU_ITEMS.WELCOME && <Welcome />}
        {itemClicked === MENU_ITEMS.USERSLIST && <UsersList apiUrl={apiUrl} />}
        {itemClicked === MENU_ITEMS.USERFORM && <UsersForm apiUrl={apiUrl} />}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
