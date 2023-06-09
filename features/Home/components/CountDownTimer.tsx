import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

import { START_DATE_OF_FEST } from '@/data'
import { calculateTimeLeft } from '@/features/Home/utils'
import { objectKeys } from '@/utils'

const CountDownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(START_DATE_OF_FEST)
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(START_DATE_OF_FEST))
    }, 1000)

    return () => clearTimeout(timer)
  })

  if (!timeLeft) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-2 sm:gap-5 items-center justify-center">
      {objectKeys(timeLeft).map((type) => (
        <NumbersCardWrapper heading={type} key={type}>
          {timeLeft[type].map((num, idx) => (
            <NumberCard number={num} key={type + idx} />
          ))}
        </NumbersCardWrapper>
      ))}
    </div>
  )
}

export default CountDownTimer

type NumbersCardWrapperProps = {
  heading: string
  children: React.ReactNode | React.ReactNode[]
}

const NumbersCardWrapper = ({ heading, children }: NumbersCardWrapperProps) => {
  return (
    <div className="flex flex-col gap-0.5 font-medium 2xl:font-semibold items-center">
      <p className="text-primary-light capitalize text-sm">{heading}</p>
      <div className="flex flex-row items-center gap-1.5">{children}</div>
    </div>
  )
}

type NumberCardProps = {
  number: string
}

const NumberCard = ({ number }: NumberCardProps) => {
  return (
    <div className="relative bg-primary-light rounded flex items-center justify-center shadow-md shadow-secondary-dark-2/80">
      <p className="px-2.5 py-1 sm:px-3 2xl:px-4 2xl:py-2 text-lg sm:text-2xl 2xl:4xl text-secondary font-bold z-10">
        {number}
      </p>
      <div className="invisible sm:visible w-full h-[0.6px] top-1/2 absolute bg-secondary-1" />
      <AnimatePresence>
        <motion.div
          key={number}
          exit={{ rotateX: 0 }}
          transition={{
            ease: 'linear',
            duration: 0.5
          }}
          initial={false}
          animate={{
            rotateX: 90
          }}
          className="top-0 w-full origin-top h-1/2 bg-secondary absolute opacity-20"
        />
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          key={number}
          exit={{ rotateX: 0 }}
          transition={{
            ease: 'linear',
            duration: 0.5
          }}
          initial={false}
          animate={{
            rotateX: 90
          }}
          className="top-1/2 origin-bottom w-full h-1/2 bg-secondary absolute opacity-10"
        />
      </AnimatePresence>
    </div>
  )
}
