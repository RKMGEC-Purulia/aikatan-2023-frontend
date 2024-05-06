import { message } from 'antd'
import React, { useEffect, useState } from 'react'
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

  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    phone: '',
    day: 'day_1&2',
    amount: ''
  })

  useEffect(() => {
    setInputData((prev) => ({
      ...prev,
      amount: inputData.day === 'day_1&2' ? '450' : '250'
    }))
  }, [inputData.day])

  const [paymentDetails, setPaymentDetails] = useState({
    upiId: 'soumenmandal0008-1@okaxis',
    name: '',
    amount: ''
  })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (isNaN(Number(inputData.amount)) || Number(inputData.amount) <= 0) {
      inputData.amount = '0'
      message.warning('please enter a valid amount')
      return
    }

    if (
      inputData.name === '' ||
      inputData.email === '' ||
      inputData.phone === '' ||
      inputData.day === '' ||
      inputData.amount === ''
    ) {
      message.warning('Please fill up all details')
      return
    }

    const formData = new FormData()
    formData.append('Name', inputData.name)
    formData.append('Email', inputData.email)
    formData.append('Phone_no', inputData.phone)
    formData.append('Day', inputData.day)
    formData.append('Amount', inputData.amount)

    setInputData({
      name: '',
      email: '',
      phone: '',
      day: 'day_1&2',
      amount: ''
    })

    fetch(
      'https://script.google.com/macros/s/AKfycbwje7mXqo1TttsGxlbwYnjKsMeicYVIjryMoOQDQqW8KH25sIvzM_39Al00okd2h9gx/exec',
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
          name: inputData.name,
          amount: inputData.amount
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
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-gray-800 shadow-xl rounded-lg p-6 space-y-4">
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
              onChange={(e) =>
                setInputData((prev) => ({
                  ...prev,
                  name: e.target.value
                }))
              }
            />
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
              onChange={(e) =>
                setInputData((prev) => ({
                  ...prev,
                  email: e.target.value
                }))
              }
            />
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
              onChange={(e) =>
                setInputData((prev) => ({
                  ...prev,
                  phone: e.target.value
                }))
              }
            />
          </div>
          <div>
            <label
              htmlFor="day"
              className=" inline-block mb-1 pl-1 font-medium">
              Select Your Days :
            </label>
            <select
              className=" w-full px-3 py-2 bg-[#414141] rounded-md border border-slate-600 outline-none  duration-200"
              onChange={(e) =>
                setInputData((prev) => ({
                  ...prev,
                  day: e.target.value
                }))
              }>
              <option value="day_1&2">Day - 1 & Day - 2</option>
              <option value="day_1">Day - 1</option>
              <option value="day_2">Day - 2</option>
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
              value={inputData.day === 'day_1&2' ? '450' : '250'}
              className="w-full px-3 py-2 bg-[#414141] rounded-md border border-slate-600 outline-none  duration-200 text-green-500"
              readOnly
            />
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
