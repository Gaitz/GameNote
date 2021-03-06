import { Button, AppBar, Toolbar, Typography, IconButton } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Home () {
  const classes = useStyles();

  return <>
    <Head>
      <title>Game Note</title>
    </Head>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  </>
}
