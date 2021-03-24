import loginPage from "./pageModels/loginPage"
import mainPage from "./pageModels/mainPage"
import { TEST_ACCOUNT, TEST_PASSWORD, WRONG_PASSWORD } from "./data"

fixture`Authentication`.page`localhost:3000/`

test("Email Login", async (t) => {
  await t.click(loginPage.emailLogin)
  await loginPage.signIn(TEST_ACCOUNT, TEST_PASSWORD)
  await t.expect(mainPage.welcomeBack.exists).ok()
})

test("toggle password visible", async (t) => {
  await t.click(loginPage.emailLogin)
  await t
    .expect(loginPage.passwordInput.getAttribute("type"))
    .eql("password", "password input default type is password")

  await loginPage.togglePasswordVisible()
  await t
    .expect(loginPage.passwordInput.getAttribute("type"))
    .eql("text", "password input should be visible with input type 'text'")
})

test("Error Toast", async (t) => {
  await t.click(loginPage.emailLogin)
  await loginPage.signIn(TEST_ACCOUNT, WRONG_PASSWORD)
  await t.expect(loginPage.errorContainer.exists).ok()
})

// test("sign in and then sign out", async t => {})

// test("sign in, reload and sign out", async t => {})
