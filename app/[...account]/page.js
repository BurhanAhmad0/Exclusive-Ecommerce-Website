"use client"
import React from 'react'
import { useSession } from "next-auth/react";
import { usePathname } from 'next/navigation';


const Account = () => {

    const { data: session } = useSession()
    const path = usePathname()

    return (
        <>
            <div className="top flex justify-between items-center px-24 py-16">
                <div className="path">
                    <span>{`Home / ${path.replace('/', "").charAt(0).toUpperCase() + path.slice(2)}`}</span>
                </div>

                <div className="greeting">
                    <p>Welcome! <span className="text-red-500">
                        {session ?
                            (session.user.name ? session.user.name.split(' ')[0] : `${session.user.first_name}`)
                            : ''
                        }
                    </span></p>
                </div>
            </div>
        </>
    )
}

export default Account
