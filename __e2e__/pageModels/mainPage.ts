import { Selector, t } from "testcafe"

interface MainPage {
  welcomeBack: Selector
}

class Page implements MainPage {
  welcomeBack

  constructor() {
    this.welcomeBack = Selector("[data-testid='welcomeBack']")
  }
}

export default new Page()
