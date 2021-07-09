import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToApp from '@material-ui/icons/ExitToApp';

const useStayles = makeStyles((theme) => ({
  root: {
    // background: theme.palette.primary.main,
    height: "100vh",
    // padding: theme.spacing(2),
  },
  appBar:{
      //boxShadow: 'none',
  },
  icons: {
    //paddingRight: theme.spacing(5),
  },
  grow: {
      flexGrow: 1,
  },
  logo:{
    height: 30,

  },
}));

function Home() {
  const classes = useStayles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img src="/images/logo.png" alt="logo" className={classes.logo} />
          <Typography variant="h6" className={classes.title} >
            Criptomoedas
          </Typography>
          <div className={classes.grow}/>
          <IconButton       
            className={classes.icons}
            color="inherit"         
          >
            <ExitToApp/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Home;
