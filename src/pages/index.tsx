import { Button, AppBar, Toolbar, Typography, IconButton } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { makeStyles } from "@material-ui/core/styles";
import { useAppSelector, useAppDispatch } from "game-note/shared/hooks/"
import { decrement, increment } from "game-note/features/example/couter/counterSlice"
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
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return <>
    <Head>
      <title>Game Note</title>
    </Head>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </>
}
