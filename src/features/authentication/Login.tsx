import { useFirebaseAuthLogin } from "game-note/features/authentication"

export function Login () {
  const { isLoading, handleGitHubSignIn } = useFirebaseAuthLogin()

  if (isLoading) {
    return <p>loading</p>
  }

  return (
    <>
      <h1>Welcome Game Note</h1>
      <button onClick={handleGitHubSignIn}>GitHub Login</button>
      <button>Email Login</button>
    </>
  )
}
