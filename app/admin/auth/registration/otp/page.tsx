/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React, { useState } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import HearinguruAdminLogo from "@/components/Logos/HearinguruAdminLogo";
import { Button } from "flowbite-react";
import OTPCountDown from "@/components/OTPCountDown/OTPCountDown";
import { SubmitHandler, useForm } from "react-hook-form";
import LoadingWrapper from "@/components/utilities/OptionalRender/LoadingWrapper/LoadingWrapper";
import { useRouter } from "next/navigation";
import AsyncUtils from "@/modules/StateManagement/AsyncState/AsyncUtils";
import AsyncStateFactory from "@/modules/StateManagement/AsyncState/AsyncStateFactory";

function page() {
  
  const router = useRouter();
  // const [state, setState] = useState<OTP.State>({
		
	// 	loading: {
	// 		changePassword: AsyncStateFactory(),
	// 	},
	// });

	// const serverActions = new ServerActions(state, setState);
	const onSubmitOTP: SubmitHandler<OTP.OTPForm> = (data) => {
		console.log(data.otp);
    router.push('/admin/auth/registration/otp/Verifyid');
	};
  const formattedTime = OTPCountDown();
  const { register, handleSubmit } = useForm<OTP.OTPForm>();
   return (
    <React.Fragment>
      <NavigationBar name="Register" />
      <div className="p-[10px] gap-14 m-auto max-w-[1180px] w-full flex justify-center items-center">
        <div className="flex  items-start justify-between">
          <div className="h-[427px] flex flex-col items-center justify-center">
            <div className="flex flex-col items-start gap-6 w-full">
              <HearinguruAdminLogo className="scale-150 origin-left" />
              <h6 className="text-gray-900 font-extrabold text-6xl">
              OTP Verfication
              </h6>
              <p className="text-base font-bold">
                Reminder:{" "}
                <span className="font-normal">
                View and manage all of your investment accounts from one dashboard
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className='m-auto  flex flex-col justify-center items-center'>
        <div className='flex items-start flex-col'>
        <form
            onSubmit={handleSubmit(onSubmitOTP)}
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
                  {...register("otp")}
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
            <Button
              // onClick={() => setShowModal(true)}
              size='lg' fullSized color='CTA' type="submit"
            >
              <LoadingWrapper
								// loading={AsyncUtils.isLoading(state.loading.changePassword)}
							>
								Continue
							</LoadingWrapper>
            </Button>
          </form>
        </div>
    </div>
      </div>
    </React.Fragment>
  );
}

export default page;
