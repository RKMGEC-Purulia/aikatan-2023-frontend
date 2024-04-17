'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import upiqrcode from 'upiqrcode'
import { Player } from '@lottiefiles/react-lottie-player'
import Link from 'next/link'

interface paymentType {
  upiId: string
  name: string
  money: string
}

export default function Payment({ upiId, name, money }: paymentType) {
  const [qrCode, setQrCode] = useState('')
  useEffect(() => {
    upiqrcode({
      payeeVPA: upiId || '',
      payeeName: name || '',
      amount: money || '',
      transactionNote: 'Payment through upi'
    })
      .then((upi: { qr: string; intent: string }) => {
        setQrCode(upi.qr)
      })
      .catch((err: Error) => {
        console.log(err)
      })
  }, [])
  const copy = () => {
    navigator.clipboard.writeText(upiId).then(async function () {
      const copyId = document.getElementById('copy-id')
      if (copyId) {
        copyId.innerHTML = 'Copied !!!'
        await new Promise((r) => setTimeout(r, 2000))
        copyId.innerHTML = 'Copy'
      }
    })
  }

  return (
    <>
      <div className=" w-full h-screen pt-[80px]">
        <div className="max-w-sm mx-auto bg-gray-800 shadow-xl rounded-lg p-6">
          <div className="qr-container items-center justify-center place-content-center ">
            <div className="border border-zinc-950">
              <Image src={qrCode} alt="QR Code" width={300} height={300} />
            </div>
            <div className="text-center justify-center place-content-center items-center mt-5 text-xl/2">
              <p>Scan the QR code</p>
              {money != '0' ? (
                <p>
                  Amount: <strong>₹ {money}</strong>{' '}
                </p>
              ) : (
                <></>
              )}
              <div className="upi-id-content">
                <div className="text-red-700 text-xl">
                  <strong id="upi-id">{upiId}</strong>
                </div>
                <div className="w-full flex justify-center item-center my-3 ">
                  <button
                    id="copy-id"
                    onClick={copy}
                    className=" px-4 py-2 rounded-lg bg-blue-600">
                    Copy
                  </button>
                </div>
                <div className="text-center justify-center items-center">
                  <Player
                    autoplay
                    loop
                    className="bg1 w-10 h-10"
                    src="https://lottie.host/2b51d7af-7099-49f5-93df-f8190dde11bb/WU9eejAueC.json"></Player>
                </div>
                <p className=" py-2 text-sm opacity-75 ">
                  If payment done then{' '}
                  <Link
                    href="/"
                    className="text-[#5495ff] cursor-pointer underline">
                    click
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
