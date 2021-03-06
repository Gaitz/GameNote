import { Button, Grid, Typography } from "@material-ui/core"
import { useAppSelector, useAppDispatch } from "game-note/shared/hooks/"
import { decrement, increment } from "game-note/features/example/couter/counterSlice"
import Head from "next/head"

export default function Home () {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return <>
    <Head>
      <title>Game Note</title>
    </Head>
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography variant="h1" color="primary">Hello world</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h2">{count}</Typography>
      </Grid>
      <Grid container
        justify="space-evenly"
        alignItems="center">
        <Grid item>
          <Button size="large" variant="contained" onClick={() => dispatch(increment())}>+</Button>
        </Grid>
        <Grid item>
          <Button size="large" variant="contained" onClick={() => dispatch(decrement())}>-</Button>
        </Grid>
      </Grid>
    </Grid>
  </>
}
