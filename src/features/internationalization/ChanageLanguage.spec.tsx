import ChangeLanguage from "./ChangeLanguage"
import { render, userEvent } from "game-note/shared/utils/test-utils"
import nookies from "nookies"

const mockPush = jest.fn()
const defaultLocale = "zh-TW"
const localeEN = "en"
const NEXT_LOCALE_COOKIE = "NEXT_LOCALE"

jest.mock("next/router", () => ({
  useRouter: () => ({
    locale: defaultLocale,
    push: mockPush
  })
}))

describe("Internationalization", () => {
  it("Snapshot", () => {
    const { asFragment } = render(<ChangeLanguage />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("Change Language", () => {
    const { getByTestId } = render(<ChangeLanguage />)
    const languageSelector = getByTestId("languageSelector")

    userEvent.selectOptions(languageSelector, "")
    expect(mockPush).not.toBeCalled()

    userEvent.selectOptions(languageSelector, defaultLocale)
    expect(mockPush).not.toBeCalled()

    userEvent.selectOptions(languageSelector, localeEN)
    expect(mockPush).toBeCalled()
    expect(nookies.get(null)[NEXT_LOCALE_COOKIE]).toBe(localeEN)
  })
})
