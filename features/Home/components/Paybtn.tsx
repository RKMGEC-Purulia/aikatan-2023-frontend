import React from 'react'
import Link from 'next/link'

const Paybtn = () => {
  return (
    <div className={'flex flex-col gap-2 items-center my-10'}>
      <Link href={'/checkout'}>
        <button
          className={
            'bg-blue-700 px-4 rounded-sm py-1 text-lg text-white hover:bg-blue-800'
          }>
          Book Now
        </button>
      </Link>
      <p className="text-2xl">
        Book your Pass{' '}
        <span className="text-green-500 font-semibold">@899/-</span> Only
      </p>
    </div>
  )
}

export default Paybtn
