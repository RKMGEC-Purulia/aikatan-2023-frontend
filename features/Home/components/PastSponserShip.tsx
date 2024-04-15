import React from 'react'
import ArdentComputech from '@/assets/sponsers/ardent_logo.webp'
import KBCityMall from '@/assets/sponsers/city-mall.webp'
import FriendsFM from '@/assets/sponsers/friends-fm.webp'
import SagarRajResorts from '@/assets/sponsers/sagar-raj-resorts.webp'
import SpotLightItem from '@/features/Home/components/SpotLightItem'
import { socialIconMap, SocialCardWrapper, SocialCard } from './SponserShip'
import EventCardWrapper from './EventCardWrapper'

const PastSponserShipData = [
  {
    id: 1,
    imgSrc: SagarRajResorts.src,
    description: '',
    title: 'Sagar Raj Resorts',
    location: '',
    type: 'Hotel & Lodging Partner',
    social: [
      {
        id: 'website',
        link: 'https://sagarrajresort.com/'
      }
    ]
  },
  {
    id: 2,
    imgSrc: KBCityMall.src,
    description: '',
    title: 'KB City Mall',
    location: '',
    type: 'Asociate Sponsor',
    social: [
      {
        id: 'facebook',
        link: 'https://www.facebook.com/kbcitymallpurulia'
      }
    ]
  },
  {
    id: 3,
    imgSrc: ArdentComputech.src,
    description: '',
    title: 'Ardent Computech',
    location: '',
    type: 'Training Partner',
    social: [
      {
        id: 'facebook',
        link: 'https://www.facebook.com/Ardentgroup/'
      },
      {
        id: 'linkedin',
        link: 'https://www.linkedin.com/company/ardentinternships/'
      },
      {
        id: 'website',
        link: 'https://www.ardentcollaborations.com/'
      }
    ]
  },
  {
    id: 4,
    imgSrc: FriendsFM.src,
    description: '',
    title: '91.9Friends FM',
    location: '',
    type: 'Radio Partner',
    social: [
      {
        id: 'instagram',
        link: 'https://www.instagram.com/919friendsfm/'
      }
    ]
  }
] as const

const PastSponserShip = () => {
  return (
    <section
      className={'flex flex-col gap-2 items-center pt-10'}
      id={'partner-sponsor'}>
      <a href="#partner-sponsor">
        <h2
          className={
            'font-extrabold uppercase text-4xl 2xl:text-5xl sm:text-center my-10 text-content'
          }>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f12b7f] to-indigo-500">
            Past
          </span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
            Partner
          </span>{' '}
          &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Sponsor
          </span>
        </h2>
      </a>
      <EventCardWrapper>
        {PastSponserShipData.map(
          ({ description, type, imgSrc, location, social, title, id }) => (
            <PastSponserShipCard
              type={type}
              key={id}
              description={description}
              imgSrc={imgSrc}
              location={location}
              social={social}
              title={title}
            />
          )
        )}
      </EventCardWrapper>
    </section>
  )
}

export default PastSponserShip

export type Social = { id: keyof typeof socialIconMap; link: string }
type PastSponserShipCardProps = {
  imgSrc: string
  description: string
  title: string
  type: string
  location: string
  social: readonly Social[]
}

const PastSponserShipCard = ({
  description,
  imgSrc,
  location,
  title,
  type,
  social
}: PastSponserShipCardProps) => {
  return (
    <div className={'h-max w-60 rounded shadow-xl overflow-hidden'}>
      <div
        className={`bg-center bg-cover w-full h-28 overflow-auto bg-[url(${imgSrc})]`}></div>
      <SpotLightItem>
        <div className="px-4 py-5 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className={'text-xl  font-semibold uppercase'}>{title}</h3>
            <h4 className={'text-base text-gray-100'}>{type}</h4>
            <div className="text-content-medium flex flex-col gap-2">
              {description && (
                <p className="text-content-medium">{description}</p>
              )}
              {location && (
                <div>
                  <p>
                    <b>Location:</b>{' '}
                  </p>
                  <p>{location}</p>
                </div>
              )}
              <SocialCardWrapper>
                {social.map(({ id, link }) => (
                  <SocialCard link={link} id={id} key={id} />
                ))}
              </SocialCardWrapper>
            </div>
          </div>
        </div>
      </SpotLightItem>
    </div>
  )
}
