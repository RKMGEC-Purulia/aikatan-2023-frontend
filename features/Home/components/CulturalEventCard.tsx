import SpotLightItem from './SpotLightItem'
import { motion } from 'framer-motion'

type CulturalEventCardProps = {
  duration: number
  imgSrc: string
  description: string
  title: string
  time: string
  location: string
}
export const CulturalEventCard = ({
  duration,
  description,
  imgSrc,
  location,
  time,
  title
}: CulturalEventCardProps) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        delay: duration / 10 + 0.2,
        type: 'spring'
      }}
      className="min-h-[32rem] w-[23rem] rounded-xl shadow-xl overflow-hidden">
      <SpotLightItem className={' h-full w-full p-4 black-gradient'}>
        <div
          className={`bg-center bg-cover w-full h-52 rounded-lg overflow-auto bg-[url(${imgSrc})]`}></div>
        <div className="px-4 py-5 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className={'text-xl 2xl:text-2xl font-semibold'}>{title}</h3>
            <div className="text-content-medium flex flex-col gap-2">
              {description && (
                <p className="text-content-medium">{description}</p>
              )}
              {time && (
                <div>
                  <p>
                    <b>Time:</b>{' '}
                  </p>
                  <p>{time}</p>
                </div>
              )}
              {location && (
                <div>
                  <p>
                    <b>Location:</b>{' '}
                  </p>
                  <p>{location}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </SpotLightItem>
    </motion.div>
  )
}
