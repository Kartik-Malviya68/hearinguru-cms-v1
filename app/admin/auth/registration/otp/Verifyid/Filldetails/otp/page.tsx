'use client'
import React from 'react'

import { Button } from 'flowbite-react'
import OTPCountDown from '@/components/OTPCountDown/OTPCountDown'
import NavigationBar from '@/app/admin/auth/components/NavigationBar/NavigationBar';
import { useRouter } from 'next/navigation';
import Modals from '@/components/Modals/CommonModals/Modals';
import speaker from '@/public/icons/Modals/Illustration.svg';
export default function otp() {
  const [openModal, setOpenModal] = React.useState(false)
  const router = useRouter();
  const formattedTime = OTPCountDown();
  return (
    <React.Fragment>
       <NavigationBar name="OTP Verification"/>
       <div className='m-auto max-w-[1180px] flex flex-col justify-center items-center w-full'>
        <div className='flex items-start flex-col'>
        <form
            
            className="flex max-w-[375px] h-[290px] p-8 items-center md:p-6 flex-col justify-between gap-5"
          >
            <div className="flex flex-col items-center gap-2">
              <h5 className="text-xl font-bold text-[#1f2024] text-center">
              Enter secret code for Admins
              </h5>
              <p className="text-center text-sm font-normal text-[#71727a]">
              You need to enter a 4 gigit secret code to be able to access this admin portal
              </p>
              <div className="w-full mt-3">
                <input
                  // {...register("otp")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Secret Code"
                />
              </div>
            </div>
            <Button size='lg' fullSized color='CTA' onClick={()=>{setOpenModal(true) }}  >Continue</Button>
            {/* <h5 className="font-normal text-sm text-center text-gray-500">
              Resend code in
              <span className="font-semibold text-black"> {formattedTime.formattedTime}</span>
            </h5> */}
            {/* <button onClick={()=> formattedTime.setSeconds(30)} className={`${formattedTime.seconds === 0  ? 'light-blue-btn' : 'light-blue-btn-disable'}`}>Resend code</button> */}
            {/* <button
              // onClick={() => setShowModal(true)}
              className="blue-btn w-full relative"
            >
              <LoadingWrapper loading={true}>Continue</LoadingWrapper>
            </button> */}
          </form>
        </div>
        <div className='flex w-[375px] p-6 pt-0 flex-col items-start gap-3'>
        
        </div>
        <Modals openModal={openModal} icon={speaker.src}  heading='Welcome Admin' blueBtnClick={()=>router.push('/admin/dashboard')} blueBtn blueBtnText='Go to Dashboard' about='You can get started with hearinguru admin portal right now!!' onCloseModal={()=>setOpenModal(false)}/>
    </div>
    </React.Fragment>
  )
}


