module.exports = {
  analytics: () => null,
  initializeApp: () => null,
  auth: jest.fn(() => ({
    signOut: jest.fn(() => Promise.resolve(true))
  })),
  firestore: () => null
}
