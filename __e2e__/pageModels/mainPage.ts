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
    this.signOutButton = Selector("[data-testid='signOutButton']")
  }

  async signOut() {
    await t.click(this.appHeaderMenuButton)
    await t.click(this.signOutButton)
    await t.wait(1000)
  }

  async assertSignIn(account: string) {
    await t
      .expect(this.userEmail.textContent)
      .eql(account, "Sign in should match user account")
  }
}

export default new Page()
