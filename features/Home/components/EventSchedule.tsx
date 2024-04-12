import React from 'react'
import { EventData } from '@/data'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { MdDateRange } from 'react-icons/md'

const EventSchedule = () => {
  return (
    <section id={'event-schedule'} className="pt-10">
      <a href="#event-schedule">
        <h2 className={'text-4xl 2xl:text-5xl text-center my-10 text-content'}>
          <span className="text-green-500 font-semibold">EVENT </span>SCHEDULE
        </h2>
      </a>
      <VerticalTimeline className=" text-black" lineColor="gray">
        {EventData.map(({ date, shedules }) => (
          <EventScheduleCard key={date} shedules={shedules} date={date} />
        ))}
      </VerticalTimeline>
    </section>
  )
}

export default EventSchedule

type shedule = {
  to: string
  from: string
  name: string
}
type EventCardProps = {
  date: string
  shedules: readonly shedule[]
}

const EventScheduleCard = ({ date, shedules }: EventCardProps) => {
  const dateTime = new Date(date)
  const dateToString = dateTime.toDateString().split(' ')
  const month = dateToString[1]
  const day = dateToString[0]
  const dayOfMonth = dateToString[2]
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: 'rgb(31 41 55)',
        color: '#fff',
        border: 'none'
      }}
      contentArrowStyle={{ borderRight: '7px solid rgb(31 41 60)' }}
      date={`${dayOfMonth}th ${month} `}
      iconStyle={{ background: 'rgb(31 41 55)', color: '#fff' }}
      icon={<MdDateRange size={20} />}>
      <div>
        {shedules.map(({ name, from, to }, idx) => {
          return (
            <div key={idx} className="flex flex-row gap-3 items-start">
              <div className={'text-gray-400 text-lg'}>
                <p>{to}</p>
                <p className={'text-center'}>{from}</p>
              </div>
              <p className="text-base 2xl:font-xl font-medium 2xl:font-semibold">
                {name}
              </p>
            </div>
          )
        })}
      </div>
    </VerticalTimelineElement>
  )
}
