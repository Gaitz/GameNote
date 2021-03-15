import { Button, Fade, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { useFirebaseAuthLogin, EmailLogin } from "game-note/features/authentication"
import { Loading } from "game-note/shared/components"
import { useState } from "react"

export function Login () {
  const { isLoading, handleGitHubSignIn } = useFirebaseAuthLogin()

  const [
    emailInputVisible,
    toggleEmailInputVisible
  ] = useState(false)

  if (isLoading) {
    return <Loading />
  }

  return (
    <Flex
      mt={[
        "10",
        "36"
      ]}
      flexDirection="row"
      alignItems="flex-start"
      justifyContent="center"
      flexWrap="wrap"
    >
      <Heading as="h1"
        flexBasis={[
          "100%",
          null,
          "50%"
        ]}
        fontSize={[
          "3xl",
          "5xl"
        ]}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Text variant="heading" align="center">Welcome,</Text>
        Game Note
      </Heading>
      <SimpleGrid spacing="5"
        mt={[
          "5",
          null,
          "0"
        ]}
        mr={[
          "0",
          null,
          null,
          "18vw"
        ]}
      >
        <Button onClick={handleGitHubSignIn}>GitHub Login</Button>
        <Button onClick={() => toggleEmailInputVisible(!emailInputVisible)}>Email Login</Button>
        <Fade in={emailInputVisible}>
          <EmailLogin />
        </Fade>
      </SimpleGrid>
    </Flex>
  )
}
