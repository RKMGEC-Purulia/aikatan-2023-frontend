import Link from 'next/link'
import React from 'react'

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
      <p className="text-2xl">Book your Pass </p>
    </div>
  )
}

export default Paybtn
