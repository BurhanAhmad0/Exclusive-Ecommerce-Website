"use client"
import React from 'react'
import { useSession } from "next-auth/react";


const Account = () => {

    const { data: session } = useSession()

    return (
        <div>
            {session ? (<p>Logged in as {session.user.first_name} {session.user.last_name}</p>) : (<p>Not logged in</p>)}
        </div>
    )
}

export default Account
