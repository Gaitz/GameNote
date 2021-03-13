import { useFirebaseAuthLogout } from "game-note/features/authentication"

export default function AppHeader () {
  const { handleSignOut } = useFirebaseAuthLogout()

  return (
    <>
      <h1>Game Note</h1>
      <button onClick={handleSignOut}>Logout</button>
    </>
  )
}
