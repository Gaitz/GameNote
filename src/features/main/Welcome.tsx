import { Typography } from "@material-ui/core";
import { useAppSelector } from "game-note/shared/store";
import AppHeader from "game-note/shared/components/AppHeader";

export default function Welcome () {
  const currentUser = useAppSelector((state) => state.authentication.user)

  return <>
    <AppHeader />
    <Typography>Welcome Back, {currentUser?.displayName}</Typography>
  </>
}
