import Link from 'next/link'
import React from 'react'

const Paybtn = () => {
  return (
    <div className={'flex flex-col gap-2 items-center my-10'}>
      <Link href={'/checkout'}>
        <button
          className={
            'bg-blue-700  w-[150px] py-2 text-2xl  px-4 rounded-lg  text-white hover:bg-blue-800'
          }>
          Book Now
        </button>
      </Link>
      <p className="text-2xl">Book your Pass </p>
    </div>
  )
}

export default Paybtn
