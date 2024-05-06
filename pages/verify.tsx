import { message } from 'antd'
import React from 'react'
import { useForm } from 'react-hook-form'

const Verify = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue
  } = useForm()

  const submit = (data: any) => {
    console.log(data)
    message.success(
      'Your pass will be provided to you in your email within 4-5 hours'
    )
    setValue('email', '')
    setValue('tnxId', '')

    const formData = new FormData()
    formData.append('Email', data.email)
    formData.append('Transaction_Id', data.tnxId)

    fetch(
      'https://script.google.com/macros/s/AKfycbzVA4eWdEVe8gk66i8GPnEePGEM69gzN8q-4aUT3kiKooIl41JZ3qm4G0AQxcBmDDO8/exec',
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
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error)
      })
  }
  return (
    <div className=" w-full h-screen pt-[80px]">
      <form
        onSubmit={handleSubmit(submit)}
        className="max-w-sm mx-auto bg-gray-800 shadow-xl rounded-lg p-6 space-y-4">
        <h1 className=" text-xl font-semibold tracking-wider text-center">
          To Get Your Pass Fill This Form
        </h1>
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
            Transaction Id :
          </label>
          <input
            type="number"
            placeholder="Enter your phone number"
            className="w-full px-3 py-2 bg-[#414141] rounded-md border border-slate-600 outline-none  duration-200"
            {...register('tnxId', {
              required: 'tnxId is required',
              minLength: 12,
              maxLength: 12
            })}
          />
          {errors.tnxId && (
            <span className=" text-red-500 text-xs">
              {/* @ts-ignore */}
              {errors.tnxId.message}
            </span>
          )}
        </div>
        <div className="w-full flex justify-center item-center ">
          <button type="submit" className=" px-4 py-2 rounded-lg bg-blue-600">
            Submit
          </button>
        </div>
        <p className=" text-slate-400 ">
          If any issue occur please contact to this <br />
          <span className=" underline font-semibold tracking-wider">
            +91 8944808544
          </span>
        </p>
      </form>
    </div>
  )
}

export default Verify
