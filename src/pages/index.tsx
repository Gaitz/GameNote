import { Grid, Typography } from "@material-ui/core"
import Head from "next/head"

export default function Home () {
  return <>
    <Head>
      <title>Game Note</title>
    </Head>
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography variant="h1" color="primary">Hello world</Typography>
      </Grid>
    </Grid>
  </>
}
