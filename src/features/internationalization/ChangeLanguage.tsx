import { ChangeEventHandler } from "react"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import { Select } from "@chakra-ui/react"
import nookies from "nookies"

type supportedLocales = "en" | "zh-TW"
type supportedLocalesNameMapping = { [locale in supportedLocales]: string }

const supportedLocalesName: supportedLocalesNameMapping = {
  en: "English",
  "zh-TW": "繁體中文"
}

// [reference](https://nextjs.org/docs/advanced-features/i18n-routing#leveraging-the-next_locale-cookie)
const NEXT_LOCALE_COOKIE = "NEXT_LOCALE"

export function ChangeLanguage() {
  const { t } = useTranslation("login")
  const router = useRouter()

  const languageChangeHandler: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    const selectedLanguage = event.target.value
    const isChanged = selectedLanguage !== router.locale

    if (selectedLanguage && isChanged) {
      const currentPath = router.pathname
      router.push(currentPath, currentPath, { locale: selectedLanguage })
      nookies.set(null, NEXT_LOCALE_COOKIE, selectedLanguage)
    }
  }

  return (
    <Select
      placeholder={t("languageSwitch")}
      onChange={languageChangeHandler}
      width="max-content"
    >
      {Object.entries(supportedLocalesName).map(([locale, name]) => {
        return (
          <option key={locale} value={locale}>
            {name}
          </option>
        )
      })}
    </Select>
  )
}
