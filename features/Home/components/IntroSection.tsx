// import dynamic from 'next/dynamic'
import React from 'react'

import Logo from '@/assets/icons/Aikatan-logo.png'
import NeonEffect from '@/assets/icons/neon-effect.png'

const IntroSection = () => {
  return (
    <div className="z-10 w-full flex items-center flex-col gap-3">
      <div className="relative flex items-center flex-col">
        <div className="z-20 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full flex flex-col items-center">
          <img
            src={Logo.src}
            alt="aikatan 2.0 logo"
            className={'h-full w-full'}
          />
        </div>
        <div
          className={
            'w-48 sm:w-68 2xl:w-80 sm:max-w-sm h-full scale-150 opacity-90'
          }>
          <img
            src={NeonEffect.src}
            alt="aikatan 2.0 logo"
            className={'w-full h-full animate-spin'}
          />
        </div>
      </div>
      <div className="z-20 typewriter font-bengali-noto-sans text-2xl sm:text-4xl 2xl:text-5xl font-semibold text-amber-400">
        <p className={'border-r-4 border-amber-400 px-2'}>
          #Tech Meets Culture
        </p>
      </div>
      <h1 className="text-center text-lg sm:text-xl text-content font-semibold">
        Get ready to experience a world of <br />
        <div>
          <span className={'text-emerald-500'}>Creativity</span>,{' '}
          <span className={'text-amber-500 font-extrabold'}>Innovation</span>{' '}
          and{' '}
          <span className={'text-sky-500 font-extrabold'}>
            Entertainment ❤️‍🔥
          </span>
        </div>
      </h1>

      {/* <CountDownTimerDynamic /> */}
    </div>
  )
}

export default IntroSection
