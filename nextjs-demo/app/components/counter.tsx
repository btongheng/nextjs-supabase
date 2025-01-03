"use client"
import { useState } from 'react'
import {useAuth, useUser} from "@clerk/nextjs"

export default function Counter() {

  // const {isLoaded, userId, sessionId, getToken} = useAuth();
  const { isLoaded, isSignedIn, user} = useUser()

  console.log("Counter Component")

  const [count, setCount] = useState(0);

  if (!isLoaded || !isSignedIn) {
    return null
  }

  return (
    <button
    onClick={() => setCount(count + 1)}
    disabled={count === 5}
    >
      Click {count} times
    </button>
  )
}
