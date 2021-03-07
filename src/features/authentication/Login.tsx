import { Grid, Typography } from "@material-ui/core";
import dynamic from "next/dynamic"

const FirebaseLoginWithNoSSR = dynamic(
  () => import("./FirebaseLogin"),
  { ssr: false }
)

export function Login () {
  return <Grid container>
    <Grid item container direction="column">
      <Typography>Welcome,</Typography>
      <Typography>Game Note</Typography>
    </Grid>
    <Grid item>
      <FirebaseLoginWithNoSSR />
    </Grid>
  </Grid>
}
