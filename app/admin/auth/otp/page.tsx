'use client'
import React from 'react'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import { Button } from 'flowbite-react'
import OTPCountDown from '@/components/OTPCountDown/OTPCountDown'

export default function otp() {
  const formattedTime = OTPCountDown();
  return (
    <React.Fragment>
       <NavigationBar name="OTP Verification"/>
       <div className='m-auto max-w-[1180px] flex flex-col justify-center items-center w-full'>
        <div className='flex items-start flex-col'>
        <form
            
            className="flex max-w-[375px] h-[324px] p-8 items-center md:p-6 flex-col justify-center gap-5"
          >
            <div className="flex flex-col items-center gap-2">
              <h5 className="text-xl font-bold text-[#1f2024] text-center">
                Enter confirmation code
              </h5>
              <p className="text-center text-sm font-normal text-[#71727a]">
                A 4-digit code was sent to lucasscott3@email.com
              </p>
              <div className="w-full mt-3">
                <input
                  // {...register("otp")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter OTP"
                />
              </div>
            </div>

            <h5 className="font-normal text-sm text-center text-gray-500">
              Resend code in
              <span className="font-semibold text-black"> {formattedTime.formattedTime}</span>
            </h5>
            <button onClick={()=> formattedTime.setSeconds(30)} className={`${formattedTime.seconds === 0  ? 'light-blue-btn' : 'light-blue-btn-disable'}`}>Resend code</button>
            {/* <button
              // onClick={() => setShowModal(true)}
              className="blue-btn w-full relative"
            >
              <LoadingWrapper loading={true}>Continue</LoadingWrapper>
            </button> */}
          </form>
        </div>
        <div className='flex w-[375px] p-6 pt-0 flex-col items-start gap-3'>
        <Button size='lg' fullSized color='blue' >Continue</Button>
        </div>
    </div>
    </React.Fragment>
  )
}


