import React from 'react'

import Asphalt from '@/assets/events/asphalt.webp'
import BGMI from '@/assets/events/bgmi.webp'
import ClashRoyale from '@/assets/events/ClashRoyale.webp'
import eFootbal from '@/assets/events/eFootbal.webp'
import FIFA from '@/assets/events/Fifa.webp'
import FreeFire from '@/assets/events/freefire.webp'
import Mini_Militia from '@/assets/events/Mini_Militia.webp'
import Valorant from '@/assets/events/valorant.webp'
import { YetToBeAnnounced } from '@/features/Home/components/TechLavya'

import { EventCardV2 } from './EventCard'
import EventCardWrapper from './EventCardWrapper'

export const EsportsEventData = [
  {
    id: 1,
    rules: '',
    imgSrc: FreeFire.src,
    name: 'FREE FIRE MAX',
    description: `The FREE FIRE MAX esports competition offers a unique chance to elevate your gaming experience and become a legend in the world of esports. Register now and let the games begin!`,
    time: '11th May',
    register_link: 'https://forms.gle/uQvsqdY3CJuw1KJA6',
    contact: [
      {
        name: '',
        number: '+91 9749961217'
      }
    ],
    prizes: {
      winner: YetToBeAnnounced,
      runner_up: ''
    },
    location: YetToBeAnnounced,
    limitWord: 'default'
  },
  {
    id: 2,
    imgSrc: BGMI.src,
    name: 'BGMI',
    rules: '',
    description: `Ready to battle it out on the virtual battlegrounds? Put your skills with thrilling gameplay and nail-biting matches, and win amazing prizes. Don't miss out on this adrenaline-fueled gaming experience!`,
    time: '11th May',
    register_link: 'https://forms.gle/zHfQQbL9x5PcxkCPA',
    contact: [
      {
        name: '',
        number: 'Yet to be announced!!'
      }
    ],
    prizes: {
      winner: YetToBeAnnounced,
      runner_up: ''
    },
    location: YetToBeAnnounced,
    limitWord: 'default'
  },
  {
    id: 3,
    imgSrc: eFootbal.src,
    name: 'eFootball',
    description: `Join the eFootball e sports competition in college and compete against the best players. With exciting prizes up for grabs. Don't miss out on this incredible opportunity!`,
    time: '11th May',
    register_link: 'https://forms.gle/ysJy67o6tLu5DL6K7',
    contact: [
      {
        name: '',
        number: '+91 9749961217'
      }
    ],
    rules: '',
    prizes: {
      winner: YetToBeAnnounced,
      runner_up: ''
    },
    location: YetToBeAnnounced,
    limitWord: 'default'
  },
  {
    id: 4,
    imgSrc: Mini_Militia.src,
    name: 'Mini Militia ',
    description: `Join the Mini Militia  e sports competition in college and compete against the best players. With exciting prizes up for grabs. Don't miss out on this incredible opportunity!`,
    time: '11th May',
    register_link: 'https://forms.gle/AEqLvKPvL6oUuGBi9',
    contact: [
      {
        name: '',
        number: '+91 9749961217'
      }
    ],
    rules: '',
    prizes: {
      winner: YetToBeAnnounced,
      runner_up: ''
    },
    location: YetToBeAnnounced,
    limitWord: 'default'
  },
  {
    id: 5,
    rules: '',
    imgSrc: Asphalt.src,
    name: 'Asphalt-8',
    description:
      'Get ready to burn some rubber and dominate the track. This high-octane event is the ultimate test of speed, skill, and strategy. With thrilling prizes. Register now and start your engines!',
    time: '11th May',
    register_link: 'https://forms.gle/VTW7wrRUWRGCcqCt9',
    contact: [
      {
        name: '',
        number: 'Yet to be announced!!'
      }
    ],
    prizes: {
      winner: YetToBeAnnounced,
      runner_up: ''
    },
    location: YetToBeAnnounced,
    limitWord: 'default'
  },
  {
    id: 6,
    imgSrc: FIFA.src,
    name: 'FIFA',
    description: `Join the fifa e sports competition in college and compete against the best players. With exciting prizes up for grabs. Don't miss out on this incredible opportunity!`,
    time: '11th May',
    register_link: 'https://forms.gle/EkkNw2mxSxtyzpHQ7',
    contact: [
      {
        name: '',
        number: '+91 9749961217'
      }
    ],
    prizes: {
      winner: YetToBeAnnounced,
      runner_up: ''
    },
    rules: '',
    location: YetToBeAnnounced,
    limitWord: 'default'
  }
  // {
  //   id: 6,
  //   rules: '',
  //   imgSrc: Valorant.src,
  //   name: 'Valorant',
  //   description:
  //     'Unleash your tactical prowess, with thrilling gameplay and unique character abilities, strategy and teamwork. Register today and take the first step towards becoming a Valorant legend!',
  //   time: '11th May',
  //   register_link: '',
  //   contact: [
  //     {
  //       name: '',
  //       number: 'Yet to be announced!!'
  //     }
  //   ],
  //   prizes: {
  //     winner: YetToBeAnnounced,
  //     runner_up: ''
  //   },
  //   location: YetToBeAnnounced,
  //   limitWord: 'default'
  // },
  // {
  //   id: 7,
  //   rules: '',
  //   imgSrc: ClashRoyale.src,
  //   name: 'Clash Royale',
  //   description: `Get ready to clash with the best player in college. Battle it out in this fast-paced strategy game for a chance to win exciting prizes. Register today and get ready to clash!`,
  //   time: '11th May',
  //   register_link: '',
  //   contact: [
  //     {
  //       name: '',
  //       number: 'Yet to be announced!!'
  //     }
  //   ],
  //   prizes: {
  //     winner: YetToBeAnnounced,
  //     runner_up: ''
  //   },
  //   location: YetToBeAnnounced,
  //   limitWord: 'default'
  // }
] as const

const Esports = () => {
  return (
    <section id={'esport-event'} className={'pt-10'}>
      <a href="#esport-event">
        <h2
          className={
            'uppercase text-4xl 2xl:text-5xl sm:text-center my-10 text-content'
          }>
          <span className="text-sky-500 font-extrabold">Esports </span>Event
        </h2>
      </a>
      <EventCardWrapper>
        {EsportsEventData.map(
          ({
            id,
            imgSrc,
            register_link,
            name,
            description,
            contact,
            prizes,
            rules,
            time,
            location,
            limitWord
          }) => (
            <EventCardV2
              duration={id}
              location={location}
              key={id}
              imgSrc={imgSrc}
              registrationLink={register_link}
              heading={name}
              description={description}
              time={time}
              prizes={prizes}
              rulesLink={rules}
              contacts={contact}
              limitWord={limitWord}
            />
          )
        )}
      </EventCardWrapper>
    </section>
  )
}

export default Esports
