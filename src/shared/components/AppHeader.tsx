import { HamburgerIcon } from "@chakra-ui/icons"
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuGroup,
  Heading,
  Flex,
  Center,
  IconButton,
  Avatar,
  Text,
  VStack
} from "@chakra-ui/react"
import { collection } from "game-note/shared/styles/theme"
import { useFirebaseAuthLogout } from "game-note/features/authentication"
import { useAppSelector } from "game-note/shared/store"
import { useTranslation } from "next-i18next"

export function AppHeader() {
  const { t } = useTranslation("common")
  const { handleSignOut } = useFirebaseAuthLogout()
  const currentUser = useAppSelector((state) => state.authentication.user)

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      bgColor={collection.color.secondary}
    >
      <Center ml="4" my="1">
        <Heading size="xl" color="white">
          Game Note
        </Heading>
      </Center>
      <Menu>
        <MenuButton
          mr={["0", null, null, "2"]}
          colorScheme="purple"
          as={IconButton}
          icon={<HamburgerIcon />}
        ></MenuButton>
        <MenuList width="max-content" minWidth={["auto", "24", "40"]}>
          <MenuGroup title={t("profile")}>
            <VStack px="2">
              <Avatar
                name={currentUser?.displayName as string}
                src={currentUser?.photoURL as string}
              />
              <Text>{currentUser?.email}</Text>
            </VStack>
          </MenuGroup>
          <MenuGroup title={t("feature")}>
            <MenuItem>{t("workoutFeature")}</MenuItem>
          </MenuGroup>
          <MenuGroup title={t("system")}>
            <MenuItem onClick={handleSignOut}>{t("signOut")}</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Flex>
  )
}
