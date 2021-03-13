import { useAppSelector } from "game-note/shared/store";
import AppHeader from "game-note/shared/components/AppHeader";

export function Welcome () {
  const currentUser = useAppSelector((state) => state.authentication.user)

  return <>
    <AppHeader />
    <p>Welcome Back, {currentUser?.displayName}</p>
  </>
}
