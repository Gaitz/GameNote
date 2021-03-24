import { Selector, t } from "testcafe"

interface MainPage {
  welcomeBack: Selector
  appHeaderMenuButton: Selector
  userEmail: Selector
  signOutButton: Selector
  signOut: () => Promise<void>

  assertSignIn: (account: string) => Promise<void>
}

class Page implements MainPage {
  welcomeBack
  appHeaderMenuButton
  userEmail
  signOutButton

  constructor() {
    this.welcomeBack = Selector("[data-testid='welcomeBack']")
    this.appHeaderMenuButton = Selector("[data-testid='appHeaderMenuButton']")
    this.userEmail = Selector("[data-testid='userEmail']")
    this.signOutButton = Selector("button").withText("Sign Out")
  }

  async signOut() {
    await t.click(this.appHeaderMenuButton).click(this.signOutButton)
  }

  async assertSignIn(account: string) {
    await t
      .expect(this.userEmail.textContent)
      .eql(account, "Sign in should match user account")
  }
}

export default new Page()
