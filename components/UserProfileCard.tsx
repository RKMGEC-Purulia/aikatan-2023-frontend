import React from 'react'

// import { AiOutlinePhone } from 'react-icons/ai'
import {
  Social,
  SocialCard,
  SocialCardWrapper
} from '@/features/Home/components/SponserShip'
import SpotLightItem from '@/features/Home/components/SpotLightItem'

type UserProfileCardProps = {
  name: {
    fistName: string
    lastName: string
  }
  contact_no?: string
  imgSrc?: string
  title: string
  social?: readonly Social[]
}

const UserProfileCard = ({
  // contact_no,
  imgSrc,
  name,
  title,
  social
}: UserProfileCardProps) => {
  const { fistName, lastName } = name
  return (
    <SpotLightItem className={'rounded'}>
      <div className="w-32 md:w-56 px-4 rounded shadow-xl py-4 flex flex-col gap-4 items-center">
        {imgSrc && (
          <div className={'p-1 rounded-full'}>
            <div className={'p-1 bg-red-500 rounded-full'}>
              <div
                className={
                  'w-24 h-24 2xl:w-32 2xl:h-32 overflow-hidden rounded-full'
                }>
                <img
                  src={
                    'https://res.cloudinary.com/dxcw44ypq/image/upload/v1714159461/1000024358-01_-_CSE_48_Namrata_Das_xnvjxa.jpg'
                  }
                  alt={'profile picture of' + name}
                />
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col items-center gap-1">
          <div className="flex flex-col items-center">
            <p className={'font-extrabold text-xl 2xl:text-2xl text-rose-500'}>
              {fistName} {lastName}
            </p>
            <p className={'font-semibold text-lg'}>{title}</p>
          </div>
          {/* <div className="flex flex-row items-center justify-center gap-1 text-gray-300">
            <AiOutlinePhone size={18} />
            <p>{contact_no}</p>
          </div> */}
          {social && social.length > 0 && (
            <SocialCardWrapper>
              {social.map(({ id, link }) => (
                <SocialCard link={link} id={id} key={id} />
              ))}
            </SocialCardWrapper>
          )}
        </div>
      </div>
    </SpotLightItem>
  )
}

export default UserProfileCard
