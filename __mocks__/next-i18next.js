module.exports = {
  useTranslation: jest.fn(() => ({
    t: (key) => key
  }))
}
