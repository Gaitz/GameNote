import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles(() => ({
  menuButton: {
    marginLeft: "auto"
  }
}));

export default function AppHeader () {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>
          Game Note
        </Typography>
        <IconButton className={classes.menuButton} edge="end" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
