"use client";
import { signIn, signOut } from "next-auth/react"

export const Appbar = () => {
    return <div className="flex justify-center space-x-20 py-10">
    <button onClick={() => signIn()}>Signin</button>
    <button onClick={() => signOut()}>Sign out</button>
  </div>
}
