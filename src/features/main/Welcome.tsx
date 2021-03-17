import { useAppSelector } from "game-note/shared/store"
import { AppHeader } from "game-note/shared/components/AppHeader"
import { Flex, Text, Fade } from "@chakra-ui/react"
import { useTranslation } from "next-i18next"

export function Welcome() {
  const { t } = useTranslation()
  const currentUser = useAppSelector((state) => state.authentication.user)

  return (
    <Fade in={true}>
      <AppHeader />
      <Flex flexDirection="column" alignItems="center" mt="5">
        <Text fontSize="2xl">{t("welcomeBack")}</Text>
        <Text mt="2" fontSize="xl">
          {currentUser?.displayName}
        </Text>
      </Flex>
    </Fade>
  )
}
