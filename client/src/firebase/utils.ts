import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./firebase";

export async function signin() {
  await signInWithPopup(auth, provider);
}

export async function signout() {
  await signOut(auth);
}
