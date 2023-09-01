import { authOptions } from '@/server/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const Server = async() => {
    const session = await getServerSession(authOptions)

    // Programatically sending user to signin page with back Url so that after login user can come back to this page
    if(!session) {
        redirect("/api/auth/signin?callbackUrl=/server")
    }
  return (
    <div>
        <h2>Programatically sending user to signin page with back Url so that after login user can come back to this page</h2>
        <p>{JSON.stringify(session)}</p>
    </div>
  )
}

export default Server