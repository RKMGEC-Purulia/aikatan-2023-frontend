import { motion } from 'framer-motion'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'

function MemberCard() {
  return (
    <>
      <div className=" w-48 sm:w-56  bg-gray-800 rounded-lg shadow-lg py-4 flex flex-col items-center space-y-3">
        <div>
          <div className=" w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden ">
            <img
              src="https://res.cloudinary.com/dxcw44ypq/image/upload/v1714159461/1000024358-01_-_CSE_48_Namrata_Das_xnvjxa.jpg"
              alt=""
            />
          </div>
        </div>
        <div className=" text-center">
          <h1 className=" text-lg sm:text-2xl font-semibold text-rose-500">
            Namrata Das
          </h1>
          <p className=" text-sm sm:text-base text-slate-300 font-medium">
            Sponsor Head
          </p>
        </div>
        <div className=" flex gap-4">
          <motion.a
            whileHover={{ scale: 1.1, color: '#4d81fa' }}
            transition={{ duration: 0.3 }}
            href=""
            target="_blank">
            <BsInstagram size={16} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, color: '#4d81fa' }}
            transition={{ duration: 0.3 }}
            href=""
            target="_blank">
            <BsLinkedin size={16} />
          </motion.a>
        </div>
      </div>
      <div className=" w-48 sm:w-52  bg-gray-800 rounded-lg shadow-lg py-4 flex flex-col items-center space-y-3">
        <div>
          <div className=" w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden ">
            <img
              src="https://res.cloudinary.com/dxcw44ypq/image/upload/v1714159461/1000024358-01_-_CSE_48_Namrata_Das_xnvjxa.jpg"
              alt=""
            />
          </div>
        </div>
        <div className=" text-center">
          <h1 className=" text-lg sm:text-2xl font-semibold text-rose-500">
            Namrata Das
          </h1>
          <p className=" text-sm sm:text-base text-slate-300 font-medium">
            Sponsor Head
          </p>
        </div>
        <div className=" flex gap-4">
          <motion.a
            whileHover={{ scale: 1.1, color: '#4d81fa' }}
            transition={{ duration: 0.3 }}
            href=""
            target="_blank">
            <BsInstagram size={16} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, color: '#4d81fa' }}
            transition={{ duration: 0.3 }}
            href=""
            target="_blank">
            <BsLinkedin size={16} />
          </motion.a>
        </div>
      </div>
      <div className=" w-48 sm:w-52  bg-gray-800 rounded-lg shadow-lg py-4 flex flex-col items-center space-y-3">
        <div>
          <div className=" w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden ">
            <img
              src="https://res.cloudinary.com/dxcw44ypq/image/upload/v1714159461/1000024358-01_-_CSE_48_Namrata_Das_xnvjxa.jpg"
              alt=""
            />
          </div>
        </div>
        <div className=" text-center">
          <h1 className=" text-lg sm:text-2xl font-semibold text-rose-500">
            Namrata Das
          </h1>
          <p className=" text-sm sm:text-base text-slate-300 font-medium">
            Sponsor Head
          </p>
        </div>
        <div className=" flex gap-4">
          <motion.a
            whileHover={{ scale: 1.1, color: '#4d81fa' }}
            transition={{ duration: 0.3 }}
            href=""
            target="_blank">
            <BsInstagram size={16} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, color: '#4d81fa' }}
            transition={{ duration: 0.3 }}
            href=""
            target="_blank">
            <BsLinkedin size={16} />
          </motion.a>
        </div>
      </div>
    </>
  )
}

export default MemberCard
