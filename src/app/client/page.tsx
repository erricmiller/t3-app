"use client"
import {useSession} from "next-auth/react"
import { redirect } from 'next/navigation'

const client = () => {
    const {data:session} = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/api/auth/signin?callbackUrl=/client")
        },
    })
  return (
    <div>
        <h2>Next Auth get Session (client only)</h2>
        <p>{JSON.stringify(session?.user)}</p>
    </div>
  )
}

export default client