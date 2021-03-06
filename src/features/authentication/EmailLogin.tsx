import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Grid,
  InputRightElement,
  GridItem
} from "@chakra-ui/react"
import { useState } from "react"
import { useTranslation } from "next-i18next"
import { useFirebaseAuthEmailLogin } from "game-note/features/authentication"

export default function EmailLogin() {
  const { t } = useTranslation("login")

  const EMAIL_FORM_ID = "EmailLogin"
  const EMAIL_INPUT_NAME = "Email"
  const PASSWORD_INPUT_NAME = "Password"

  const {
    handleEmailSignIn,
    handleEmailSignUp,
    isSubmitting
  } = useFirebaseAuthEmailLogin({
    EMAIL_FORM_ID,
    EMAIL_INPUT_NAME,
    PASSWORD_INPUT_NAME
  })

  const [passwordVisible, togglePasswordVisible] = useState(false)

  return (
    <Grid
      gap={2}
      templateColumns={"repeat(2, 1fr)"}
      as="form"
      id={EMAIL_FORM_ID}
      onSubmit={(element) => element.preventDefault()}
    >
      <GridItem colSpan={2}>
        <FormControl isRequired>
          <FormLabel>{t("emailInput")}</FormLabel>
          <Input
            autoComplete="username"
            name={EMAIL_INPUT_NAME}
            type="email"
            isRequired
            colorScheme="twitter"
            data-testid="emailInput"
          />
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <FormControl isRequired gridColumn={2}>
          <FormLabel htmlFor={PASSWORD_INPUT_NAME}>
            {t("passwordInput")}
          </FormLabel>
          <Input
            autoComplete="current-password"
            name={PASSWORD_INPUT_NAME}
            type={passwordVisible ? "text" : "password"}
            isRequired
            colorScheme="twitter"
            data-testid="passwordInput"
          />
          <InputRightElement width="4.5rem">
            <Button
              size="xs"
              data-testid="toggleVisible"
              onClick={() => togglePasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? t("hide") : t("show")}
            </Button>
          </InputRightElement>
        </FormControl>
      </GridItem>
      <GridItem textAlign="center">
        <Button
          type="submit"
          onClick={handleEmailSignIn}
          isDisabled={isSubmitting}
          colorScheme="purple"
          data-testid="signIn"
        >
          {t("signIn")}
        </Button>
      </GridItem>
      <GridItem textAlign="center">
        <Button
          type="submit"
          onClick={handleEmailSignUp}
          isDisabled={isSubmitting}
          colorScheme="purple"
          data-testid="signUp"
        >
          {t("signUp")}
        </Button>
      </GridItem>
    </Grid>
  )
}
