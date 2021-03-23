import { Selector, t } from "testcafe"

type languageOptions = "English" | "繁體中文"

interface LoginPage {
  welcomeHeader: Selector
  languageSelector: Selector
  languageOption: Selector
  languageChangeTo: (language: languageOptions) => Promise<void>
}

class Page implements LoginPage {
  welcomeHeader
  languageSelector
  languageOption

  constructor() {
    this.welcomeHeader = Selector("h1 > p")
    this.languageSelector = Selector("[data-testid='languageSelector']")
    this.languageOption = this.languageSelector.find("option")
  }

  async languageChangeTo(language: languageOptions) {
    await t
      .click(this.languageSelector)
      .click(this.languageOption.withText(language))
  }
}

export default new Page()
