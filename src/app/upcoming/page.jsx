import React from 'react'
import ListOfUpcoming from './ListOfUpcoming'

export default function UpcomingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-items-center justify-center font-mono text-sm grid grid-flow-row-dense grid-cols-1 gap-2 place-content-center lg:grid-cols-3 md:grid-cols-2">
        <ListOfUpcoming/> 
      </div>
    </main>
  )
}
