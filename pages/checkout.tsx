import { message } from 'antd'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Player } from '@lottiefiles/react-lottie-player'

import Payment from '../components/payment'

const Checkout = () => {
  // <script>
  //                 console.log(`
  //                 \n ██╗░░░██╗██████╗░██╗
  //                 \n ██║░░░██║██╔══██╗██║
  //                 \n ██║░░░██║██████╔╝██║
  //                 \n ██║░░░██║██╔═══╝░██║
  //                 \n ╚██████╔╝██║░░░░░██║
  //                 \n ░╚═════╝░╚═╝░░░░░╚═╝
  //                 `);
  //             </script>

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm()
  const [paymentDetails, setPaymentDetails] = useState({
    upiId: '9875332886800@paytm',
    name: '',
    amount: ''
  })

  const submit = (data: any) => {
    console.log(data)
    if (isNaN(Number(data.amount)) || Number(data.amount) <= 0) {
      data.amount = '0'
      message.warning('please enter a valid amount')
      return
    }

    const formData = new FormData()
    formData.append('Name', data.name)
    formData.append('Email', data.email)
    formData.append('Phone_no', data.phone)
    formData.append('Passout_year', data.year)
    formData.append('Department', data.department)
    formData.append('Amount', data.amount)

    fetch(
      'https://script.google.com/macros/s/AKfycbyvx3ymvIznztOOMjT7lXpTmIbjB1ZWO1inTv21ftqIyxKBUppefFtnHhLv9DWK0nda/exec',
      {
        method: 'POST',
        body: formData
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        return res.text() // Get response as text
      })
      .then((text) => {
        console.log(text) // Log response text
        setPaymentDetails((prev) => ({
          ...prev,
          name: data.name,
          amount: data.amount
        }))
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error)
      })
  }

  if (
    paymentDetails.upiId !== '' &&
    paymentDetails.name !== '' &&
    paymentDetails.amount !== ''
  ) {
    return (
      <Payment
        upiId={paymentDetails.upiId}
        name={paymentDetails.name}
        money={paymentDetails.amount}
      />
    )
  }

  return (
    <>
      <div className=" w-full h-screen pt-[80px]">
        <form
          onSubmit={handleSubmit(submit)}
          className="max-w-sm mx-auto bg-gray-800 shadow-xl rounded-lg p-6 space-y-4">
          <div className="w-full">
            <label
              htmlFor="name"
              className=" inline-block mb-1 pl-1 font-medium">
              Name :
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 bg-[#414141] rounded-md border border-slate-600 outline-none  duration-200"
              {...register('name', {
                required: 'Name is required'
              })}
            />
            {errors.name && (
              <span className=" text-red-500 text-xs">
                {/* @ts-ignore */}
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="email"
              className=" inline-block mb-1 pl-1 font-medium">
              Email :
            </label>
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full px-3 py-2 bg-[#414141] rounded-md border border-slate-600 outline-none  duration-200"
              {...register('email', {
                required: 'Email is required'
                // pattern: /^\S+@\S+$/i
              })}
            />
            {errors.email && (
              <span className=" text-red-500 text-xs">
                {/* @ts-ignore */}
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="phone"
              className=" inline-block mb-1 pl-1 font-medium">
              Phone Number :
            </label>
            <input
              type="number"
              placeholder="Enter your phone number"
              className="w-full px-3 py-2 bg-[#414141] rounded-md border border-slate-600 outline-none  duration-200"
              {...register('phone', {
                required: 'Phone number is required'
                // minLength: 6,
                // maxLength: 12
              })}
            />
            {errors.name && (
              <span className=" text-red-500 text-xs">
                {/* @ts-ignore */}
                {errors.name.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="department"
              className=" inline-block mb-1 pl-1 font-medium">
              Department :
            </label>
            <select
              className=" w-full px-3 py-2 bg-[#414141] rounded-md border border-slate-600 outline-none  duration-200"
              {...register('department', { required: true })}>
              <option value="">- - - select your department - - -</option>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="EE">EE</option>
              <option value="ME">ME</option>
              <option value="CE">CE</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="year"
              className=" inline-block mb-1 pl-1 font-medium">
              Passout Year :
            </label>
            <select
              className=" w-full px-3 py-2 bg-[#414141] rounded-md border border-slate-600 outline-none  duration-200"
              {...register('year', { required: true })}>
              <option value="">- - - select passout year - - -</option>
              <option value="2019-23">2019-23</option>
              <option value="2018-22">2018-22</option>
              <option value="2017-21">2017-21</option>
              <option value="2016-20">2016-20</option>
            </select>
          </div>
          <div className="w-full">
            <label
              htmlFor="amount"
              className=" inline-block mb-1 pl-1 font-medium">
              Amount :
            </label>
            <input
              type="text"
              placeholder="Enter any amount"
              className="w-full px-3 py-2 bg-[#414141] rounded-md border border-slate-600 outline-none  duration-200"
              {...register('amount', {
                required: 'please enter amount'
              })}
            />
            {errors.name && (
              <span className=" text-red-500 text-xs">
                {/* @ts-ignore */}
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="w-full flex justify-center item-center ">
            <button type="submit" className=" px-4 py-2 rounded-lg bg-blue-600">
              Submit
            </button>
          </div>
          <div className="text-center justify-center items-center">
            <Player
              autoplay
              loop
              className="bg1 w-10 h-10"
              src="https://lottie.host/2b51d7af-7099-49f5-93df-f8190dde11bb/WU9eejAueC.json"></Player>
          </div>
        </form>
      </div>
    </>
  )
}

export default Checkout
