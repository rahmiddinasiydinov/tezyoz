import React from 'react'
import Button from '../UI/Button'

function TypingSettings() {
  return (
    <div className='mt-8 flex justify-between w-[50%] mx-auto rounded-2xl border-2 border-primary bg-primary'>
        <div>
            <Button small light active>Time</Button>
            <Button small light>Words</Button>
        </div>
        <div>
            <Button small light>15s</Button>
            <Button small light active>30s</Button>
            <Button small light>60s</Button>
            <Button small light>120s</Button>
        </div>
    </div>
  )
}

export default TypingSettings