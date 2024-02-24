import React from 'react'
interface Props {
    icon: JSX.Element | React.ReactNode;
    children?: React.ReactNode;
    name: string;
    about?: string;
    onClick?: () => void;
    red? : boolean;
}
function AccountCard(props: Props) {
    const {icon,children,name,about,onClick,red} = props;
  return (
    <div onClick={onClick} className='flex select-none  rounded-b-[9px] group cursor-pointer hover:bg-slate-100 py-2 px-4 gap-3 items-center w-full bg-white'>
      <div className="flex p-[14px]  items-center justify-end gap-[10px] group-hover:bg-white rounded-[28px] bg-[#f3f4f6]">
        {icon}
      </div>
      <div className="flex w-full flex-col  items-start">

        <h3 className={`text-${red ? 'red-600' : 'gray:900'} font-medium text-lg leading-7`}>{name}</h3>
        <p className='text-sm font-normal leading-5 text-gray-500'>{about}</p>
      </div>
      {children}
    </div>
  )
}

export default AccountCard
