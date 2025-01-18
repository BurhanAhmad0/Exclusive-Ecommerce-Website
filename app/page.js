"use client"
import React from 'react'
import { useSession } from "next-auth/react";

export default function Home() {

  const { data: session } = useSession()

  return (
    <>
      <h1>Home</h1>
      {session ? (<p>Logged in as {session.user?.email}</p>) : (<p>Not logged in</p>)}
    </>
  );
}
