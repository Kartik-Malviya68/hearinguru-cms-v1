import React from 'react'
interface Props {
    children: React.ReactNode
    className?: string
    }
function SocialMediaBtn(props: Props) {
    const{ className , children } = props
  return (
    <div className={`flex ${className} cursor-pointer rounded-full items-center justify-center gap-2 w-10 h-10`}>
      {children}
    </div>
  )
}

export default SocialMediaBtn
