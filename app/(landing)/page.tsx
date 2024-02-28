"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function LandingPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()
  const search = () => {
    router.push("/results")
  }
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Enter website url" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
      <Button type="submit" onClick={search}>Parse</Button>
    </div>
    </div>
  )
}

export default LandingPage