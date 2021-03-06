import loginPage from "../pageModels/loginPage"
import mainPage from "../pageModels/mainPage"
import { TEST_ACCOUNT, TEST_PASSWORD, WRONG_PASSWORD } from "../data"
import { reload } from "../helper"

fixture`Authentication`.page`localhost:3000/en`

test.meta("ci", "githubAction")("Email Login", async (t) => {
  await t.click(loginPage.emailLogin)
  await loginPage.signIn(TEST_ACCOUNT, TEST_PASSWORD)
  await mainPage.assertSignIn(TEST_ACCOUNT)
})

test.meta("ci", "githubAction")("toggle password visible", async (t) => {
  await t.click(loginPage.emailLogin)
  await t
    .expect(loginPage.passwordInput.getAttribute("type"))
    .eql("password", "password input default type is password")

  await loginPage.togglePasswordVisible()
  await t
    .expect(loginPage.passwordInput.getAttribute("type"))
    .eql("text", "password input should be visible with input type 'text'")
})

test.meta("ci", "githubAction")("Error Toast", async (t) => {
  await t.click(loginPage.emailLogin)
  await loginPage.signIn(TEST_ACCOUNT, WRONG_PASSWORD)
  await t.expect(loginPage.errorContainer.exists).ok()
})

test.meta("ci", "githubAction")("sign in and then sign out", async () => {
  await loginPage.assertSignOut()

  await loginPage.signIn(TEST_ACCOUNT, TEST_PASSWORD)
  await mainPage.assertSignIn(TEST_ACCOUNT)

  await mainPage.signOut()
  await loginPage.assertSignOut()
})

test("sign in, reload and sign out", async (t) => {
  await t.click(loginPage.emailLogin)
  await loginPage.signIn(TEST_ACCOUNT, TEST_PASSWORD)
  await mainPage.assertSignIn(TEST_ACCOUNT)

  await reload()
  await t.wait(3000).setTestSpeed(0.05)
  await mainPage.assertSignIn(TEST_ACCOUNT)

  await mainPage.signOut()
  await loginPage.assertSignOut()
})
