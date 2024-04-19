import React from 'react'

import Codethon from '@/assets/events/codethon.webp'
import Design from '@/assets/events/design.webp'
import Exibition from '@/assets/events/exhibition.webp'
import Hackthon from '@/assets/events/hackthon.webp'
import Quiz from '@/assets/events/quiz.webp'
import RoboRush from '@/assets/events/roborush.webp'

import { EventCardV2 } from './EventCard'
import EventCardWrapper from './EventCardWrapper'

export const YetToBeAnnounced = 'Yet to be announced!!'

export const TechLavyaEvents = [
  {
    id: 1,
    limitWord: 16,
    name: 'HACK-VENGERS',
    topic: 'Hackathon',
    imgSrc: Hackthon.src,
    time: '8th May, duration - 12 hours',
    description:
      'Get ready solve the real life problems which are tormenting  the real world. So gear up and get ready to leave your mark in this epic event of creativity and technical knowledge.',
    rules_regulation_link:
      'https://drive.google.com/file/d/12NpsZRvS-dH9PENtIe4JVk0IyBQDUEjQ/view?usp=sharing',
    register_link:
      'https://docs.google.com/forms/d/e/1FAIpQLSdDPu2zVaTKXlmvCOhiwlXA-Cqgb6qLiy_DOWEVH-ZIgJNeXw/viewform',
    contact: [
      {
        name: '',
        number: '+91 8944808544'
      },
      {
        name: '',
        number: '+91 9382268227 '
      }
    ],
    prizes: {
      winner: '1. T-shirt (Hackathon participants of final round)',
      runner_up: "2. Goodies for Winner's of internal games"
    },
    location: 'Yet to be announced!!',
    last_date: '25th April'
  },
  {
    id: 2,
    limitWord: 'default',
    name: 'Gravity Algogem',
    topic: 'Codethon',
    imgSrc: Codethon.src,
    time: '10th May',
    description:
      'Gear up folks to put your coding knowledge to the ultimate coding test. A chance for the geeks to show off your knowledge in the best way possible and stand a chance to win prizes.',
    rules_regulation_link: 'https://forms.gle/QvfYipBoHcNKxDQZA',
    register_link: '',
    contact: [
      {
        name: '',
        number: 'Yet to be announced!!'
      },
      {
        name: '',
        number: ''
      }
    ],
    prizes: {
      winner: 'Yet to be announced!!',
      runner_up: ''
    },
    location: 'Yet to be announced!!',
    last_date: ''
  },
  {
    id: 3,
    limitWord: 'default',
    name: 'ACADEXPO - School ',
    topic: 'project exhibition',
    time: '8th May',
    description:
      'Here comes one of the grandest project exhibition of the town for science and technology like no other. So buckle up and put your projects and stand a chance to win cool prizes.',
    rules_regulation_link:
      'https://drive.google.com/file/d/1LydTPN8M4WBapFf054mp63_3-mXmorJO/view?usp=sharing',
    register_link: '',
    contact: [
      {
        name: '',
        number: 'Yet to be announced!!'
      },
      {
        name: '',
        number: ''
      }
    ],
    prizes: {
      winner: 'Yet to be announced!!',
      runner_up: ''
    },
    last_date: '',
    imgSrc: Exibition.src,
    location: 'Yet to be announced!!'
  },
  {
    id: 4,
    limitWord: 'default',
    name: 'ACADEXPO - College',
    topic: 'project exhibition',
    time: '9th May',
    description:
      'Here comes one of the grandest project exhibition of the town for science and technology like no other. So buckle up and put your projects and stand a chance to win cool prizes.',
    rules_regulation_link:
      'https://drive.google.com/file/d/1LydTPN8M4WBapFf054mp63_3-mXmorJO/view?usp=sharing',
    register_link: 'https://forms.gle/o25WR741EFipvL73A',
    contact: [
      {
        name: '',
        number: '+91 9123353573'
      },
      {
        name: '',
        number: ''
      }
    ],
    prizes: {
      winner: 'Upto 12k',
      runner_up: ''
    },
    imgSrc: Exibition.src,
    location: 'Yet to be announced!!',
    last_date: '25th April'
  },
  {
    id: 5,
    limitWord: 'default',
    name: 'BRAIN-BUSTER school',
    topic: 'Technical Quiz',
    imgSrc: Quiz.src,
    time: '8th May',
    description:
      'Gear up folks to put your knowledge to the ultimate test. A chance for the geeks to show off your technical knowledge in the best way possible.',
    rules_regulation_link:
      'https://drive.google.com/file/d/1RVvvFJ7O-nvPQ5zgereduEyKiLL6rse1/view?usp=share_link',
    register_link: '',
    contact: [
      {
        name: '',
        number: 'Yet to be announced!!'
      },
      {
        name: '',
        number: ''
      }
    ],
    prizes: {
      winner: 'Yet to be announced!!',
      runner_up: ''
    },
    location: 'EE Seminar Hall',
    last_date: ''
  },

  {
    id: 6,
    limitWord: 'default',
    name: 'Graphic Designing',
    topic: 'Graphic Designing',
    imgSrc: Design.src,
    time: '10th May',
    description:
      'Brings to you a graphics design challenge like never before. A chance for the geeks to show off your design knowledge in the best way possible and stand a chance to win prizes.',
    rules_regulation_link:
      'https://docs.google.com/forms/d/e/1FAIpQLScHI8YRhNJdUuPUfhfw3voRJp9n722Xj_YWwcVf1S-rZTcpbw/viewform',
    register_link: '',
    contact: [
      {
        name: '',
        number: 'Yet to be announced!!'
      },
      {
        name: '',
        number: ''
      }
    ],
    prizes: {
      winner: 'Yet to be announced!!',
      runner_up: ''
    },
    location: 'Yet to be announced!!',
    last_date: ''
  },
  {
    id: 7,
    limitWord: 'default',
    name: 'Robo-Rush',
    imgSrc: RoboRush.src,
    topic: 'Robo Car Racing',
    time: '10th May',
    description:
      'Design your own robo car and prepare them for dirt, hills, pots and obstacles!!!!! So rub out the dust from your tools here the time comes to start innovation with exciting prizes for the winners.',
    rules_regulation_link:
      'https://drive.google.com/file/d/1unn2SRYUfMXJknRAxo_idAPH0WYmZzCs/view?usp=sharing',
    register_link: 'https://forms.gle/NNXTdiKjoEjGXX456',
    contact: [
      {
        name: '',
        number: '+91 8697053297'
      },
      {
        name: '',
        number: '+91 8250595410'
      }
    ],
    prizes: {
      winner:
        'Up to 10k & Trophies for winners and Energy drinks  for the participant teams',
      runner_up: '',
      runner_up_2nd: ''
    },
    location: 'Academic Building 2 Ground',
    last_date: '25th April'
  },
  {
    id: 8,
    limitWord: 'default',
    name: 'BRAIN-BUSTER college',
    topic: 'Technical Quiz',
    imgSrc: Quiz.src,
    time: '10th May',
    description:
      'Gear up folks to put your knowledge to the ultimate test. A chance for the geeks to show off your technical knowledge in the best way possible.',
    rules_regulation_link:
      'https://drive.google.com/file/d/1RVvvFJ7O-nvPQ5zgereduEyKiLL6rse1/view?usp=share_link',
    register_link: '',
    contact: [
      {
        name: '',
        number: 'Yet to be announced!!'
      },
      {
        name: '',
        number: ''
      }
    ],
    prizes: {
      winner: 'Yet to be announced!!',
      runner_up: ''
    },
    location: 'Yet to be announced!!',
    last_date: ''
  }
] as const

const TechLavya = () => {
  return (
    <section className="pt-10" id={'tech-event'}>
      <a href="#tech-event">
        <h2
          className={
            'uppercase text-4xl 2xl:text-5xl sm:text-center  my-10 text-content'
          }>
          <span className="text-orange-500 font-extrabold">Techlavya </span>
          Event
        </h2>
      </a>
      <EventCardWrapper>
        {TechLavyaEvents.map(
          ({
            id,
            description,
            imgSrc,
            register_link,
            rules_regulation_link,
            name,
            contact,
            prizes,
            time,
            location,
            limitWord,
            last_date
          }) => (
            <EventCardV2
              key={id}
              duration={id}
              description={description}
              imgSrc={imgSrc}
              heading={name}
              registrationLink={register_link}
              rulesLink={rules_regulation_link}
              contacts={contact}
              prizes={prizes}
              time={time}
              location={location}
              limitWord={limitWord}
              last_date={last_date}
            />
          )
        )}
      </EventCardWrapper>
    </section>
  )
}

export default TechLavya
