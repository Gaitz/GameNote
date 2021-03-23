import loginPage from "./pageModels/loginPage"

fixture`login`.page`localhost:3000/en`.meta("device", "pc")

test("i18n english page", async (t) => {
  await t.expect(loginPage.welcomeHeader.textContent).contains("Welcome")
})

test("i18n change language", async (t) => {
  await t.expect(loginPage.languageSelector.exists).ok

  await loginPage.languageChangeTo("English")
  await t.expect(loginPage.languageSelector.value).contains("en")

  await loginPage.languageChangeTo("繁體中文")
  await t.expect(loginPage.welcomeHeader.textContent).contains("歡迎光臨")
})
