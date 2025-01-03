"use client"

import React, { useEffect } from 'react'

export default function Error({error} : {error: Error}) {
    useEffect(() => {
        console.log(error)
    }, [error])
  return (
    <div className='flex items-center justify-center h-screen'>
        <h2 className='px-4 py-2 rounded-full bg-red-600 text-white'>Error fetching users data</h2>
    </div>
  )
}
