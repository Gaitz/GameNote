import { useMemo, useState } from "react"
import { Button, Fade, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { useTranslation } from "next-i18next"
import {
  useFirebaseAuthLogin,
  EmailLogin
} from "game-note/features/authentication"
import { Loading } from "game-note/shared/components"
import { ChangeLanguage } from "game-note/features/internationalization"

export function Login() {
  const { t } = useTranslation("login")

  const { isLoading, handleGitHubSignIn } = useFirebaseAuthLogin()

  const [emailInputVisible, toggleEmailInputVisible] = useState(false)

  const loginInputMarginRight = useMemo(
    () => ({
      base: "0",
      md: "calc(30vw - 117.5px)",
      lg: "calc(34vw - 117.5px)"
    }),
    []
  )

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Flex mr={loginInputMarginRight} justifyContent="flex-end">
        <ChangeLanguage />
      </Flex>
      <Flex
        mt={["8", "32"]}
        flexDirection="row"
        alignItems="flex-start"
        justifyContent={{
          base: "center",
          md: "flex-end"
        }}
        flexWrap="wrap"
      >
        <Heading
          as="h1"
          flexBasis={{ base: "100%", md: "45%" }}
          fontSize={["3xl", "5xl"]}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Text variant="heading" align="center">
            {t("welcome")}
          </Text>
          Game Note
        </Heading>
        <SimpleGrid
          spacing="5"
          mt={{ base: "5", md: "0" }}
          mr={loginInputMarginRight}
        >
          <Button onClick={handleGitHubSignIn}>GitHub {t("login")}</Button>
          <Button onClick={() => toggleEmailInputVisible(!emailInputVisible)}>
            Email {t("login")}
          </Button>
          <Fade in={emailInputVisible}>
            <EmailLogin />
          </Fade>
        </SimpleGrid>
      </Flex>
    </>
  )
}
