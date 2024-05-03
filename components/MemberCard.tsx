import { motion } from 'framer-motion'
import Image from 'next/image'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'

interface membersDetailsType {
  key: string
  name: string
  role?: string
  linkedIn: string
  Instagram: string
  imgId: string
}

function MemberCard({
  key,
  name,
  role,
  linkedIn,
  Instagram,
  imgId
}: membersDetailsType) {
  return (
    <>
      <div
        className=" w-48 sm:w-56  bg-gray-800 rounded-lg shadow-lg py-4 flex flex-col items-center space-y-3"
        key={key}>
        <div>
          <div className=" w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden ">
            <Image
              src={`https://drive.google.com/uc?export=view&id=${imgId}`}
              alt=""
              width={200}
              height={300}
            />
          </div>
        </div>
        <div className=" text-center">
          <h1 className=" text-lg sm:text-2xl font-semibold text-rose-500 capitalize">
            {name}
          </h1>
          <p className=" text-sm sm:text-base text-slate-300 font-medium capitalize">
            {role}
          </p>
        </div>
        <div className=" flex gap-4 text-sm sm:text-lg ">
          <motion.a
            whileHover={{ scale: 1.1, color: '#4d81fa' }}
            transition={{ duration: 0.3 }}
            href={Instagram ? Instagram : ''}
            target="_blank">
            <BsInstagram />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, color: '#4d81fa' }}
            transition={{ duration: 0.3 }}
            href={linkedIn ? linkedIn : ''}
            target="_blank">
            <BsLinkedin />
          </motion.a>
        </div>
      </div>
    </>
  )
}

export default MemberCard
