/* eslint-disable no-console */
import * as admin from "firebase-admin"
import firebaseConfig from "./firebase.config";
import { AppUser } from "game-note/features/authentication"

function initializeServerFirebaseService (): void {
  const adminServiceIsNotInitial = admin.apps.length <= 0

  const serviceAccount: admin.ServiceAccount = {
    projectId: process.env.ADMIN_PROJECT_ID,
    privateKey: process.env.ADMIN_PRIVATE_KEY,
    clientEmail: process.env.ADMIN_CLIENT_EMAIL
  }

  if (adminServiceIsNotInitial) {
    try {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: firebaseConfig.databaseURL
      })
    } catch (error: unknown) {
      console.error("Error when initialize firebase-admin SDK")
      console.error(error)
    }
  }
}

export async function verifyIdToken (rawToken: string) {
  if (!rawToken) {
    return null
  }

  initializeServerFirebaseService()

  let verifiedToken: admin.auth.DecodedIdToken | null = null

  try {
    verifiedToken = await admin.auth().verifyIdToken(rawToken)
  } catch (error: unknown) {
    console.error("verifyIdToken failed with rawToken")
    console.error(error)
  }

  return verifiedToken
}

export type GetAppUserFromToken = (rawToken: string) => Promise<AppUser>

export const getAppUserFromToken: GetAppUserFromToken = async (rawToken) => {
  if (!rawToken) {
    return null
  }

  initializeServerFirebaseService()

  const verifiedToken = await verifyIdToken(rawToken)

  if (!verifiedToken) {
    return null
  }

  const { displayName, email, photoURL } = await admin.auth().getUser(verifiedToken.uid)
  return {
    displayName,
    email,
    photoURL
  }
}
