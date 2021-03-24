import { Selector, t } from "testcafe"

type languageOptions = "English" | "繁體中文"

interface LoginPage {
  welcomeHeader: Selector
  languageSelector: Selector
  languageOption: Selector
  languageChangeTo: (language: languageOptions) => Promise<void>

  githubLogin: Selector

  emailLogin: Selector
  passwordVisibleButton: Selector
  togglePasswordVisible: () => Promise<void>
  emailInput: Selector
  passwordInput: Selector
  signInButton: Selector
  signIn: (email: string, password: string) => Promise<void>

  errorContainer: Selector
}

class Page implements LoginPage {
  welcomeHeader
  languageSelector
  languageOption

  githubLogin

  emailLogin
  passwordVisibleButton
  emailInput
  passwordInput
  signInButton

  errorContainer

  constructor() {
    this.welcomeHeader = Selector("h1 > p")
    this.languageSelector = Selector("[data-testid='languageSelector']")
    this.languageOption = this.languageSelector.find("option")
    this.githubLogin = Selector("button").withText("GitHub")
    this.emailLogin = Selector("button").withText("Email")
    this.passwordVisibleButton = Selector("[data-testid='toggleVisible']")
    this.emailInput = Selector("input[name='Email']")
    this.passwordInput = Selector("input[name='Password']")
    this.signInButton = Selector("[data-testid='signIn']")
    this.errorContainer = Selector("[role='alert']")
  }

  async languageChangeTo(language: languageOptions) {
    await t
      .click(this.languageSelector)
      .click(this.languageOption.withText(language))
  }

  async togglePasswordVisible() {
    await t.click(this.passwordVisibleButton)
  }

  async signIn(email: string, password: string) {
    await t
      .click(this.emailLogin)
      .typeText(this.emailInput, email)
      .typeText(this.passwordInput, password)
      .click(this.signInButton)
  }
}

export default new Page()
