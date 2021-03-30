module.exports = {
  useTranslation: jest.fn(() => ({
    t: (key) => key,
    i18n: {
      language: "en"
    }
  }))
}
