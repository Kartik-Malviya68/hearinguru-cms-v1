import React, { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  about: string;
  name: string;
  expendables?: boolean;
  children?: ReactNode;
  onclick?: () => void;
  chevron?: boolean;
}
function SettingCard(props: Props) {
  const { icon, children, name, about, onclick, chevron } = props;
  const [isOn, setIsOn] = React.useState(false);

  return (
    <div className="w-full" onClick={onclick}>
      <div
        className="w-full flex  overflow-hidden flex-col gap-3"
        onClick={() => setIsOn(!isOn)}
      >
        <div className="flex py-2 select-none	 px-4 group  justify-end hover:bg-gray-100  cursor-pointer duration-200 items-center gap-3 w-full">
          <div className="flex items-center gap-[10px]  p-[14px] justify-center  duration-200  group-hover:bg-white rounded-[28px] bg-[#f3f4f6]">
            {icon}
          </div>
          <div className="flex items-start w-full flex-col gap-1">
            <h4 className="text-gray-900 text-lg font-medium leading-7">
              {name}
            </h4>
            <p className="text-gray-500 text-sm font-normal leading-5">
              {about}
            </p>
          </div>
          {chevron === true ? (
            isOn ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M10.0784 13.7614L10.0785 13.7615C10.3204 14.0206 10.6582 14.1674 11 14.1674C11.3416 14.1674 11.6797 14.0207 11.9228 13.7611C11.9228 13.7611 11.9229 13.761 11.9229 13.761L16.8045 8.53566L10.0784 13.7614ZM10.0784 13.7614L5.19639 8.53566C5.19636 8.53563 5.19634 8.5356 5.19631 8.53557C5.03873 8.36661 5.04808 8.10286 5.21501 7.9462C5.38394 7.78951 5.64862 7.79962 5.80358 7.96571L5.80383 7.96599M10.0784 13.7614L5.80383 7.96599M5.80383 7.96599L10.6347 13.136L11 13.527M5.80383 7.96599L11 13.527M11 13.527L11.3653 13.136M11 13.527L11.3653 13.136M11.3653 13.136L16.1962 7.96599L16.1968 7.96526M11.3653 13.136L16.1968 7.96526M16.1968 7.96526C16.3521 7.79844 16.617 7.78914 16.7845 7.94575L16.1968 7.96526ZM16.7845 7.94578C16.9525 8.10298 16.9617 8.367 16.8047 8.53545L16.7845 7.94578Z"
                  fill="#6B7280"
                  stroke="#6B7280"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M16.8043 13.4618L16.8045 13.462C16.9612 13.6299 16.9534 13.8957 16.7837 14.0554C16.7034 14.1305 16.6028 14.1673 16.5 14.1673C16.3886 14.1673 16.278 14.123 16.1956 14.0348C16.1955 14.0348 16.1955 14.0347 16.1954 14.0346L11.3658 8.85122L11 8.45864L10.6342 8.85119L5.80456 14.0337C5.80451 14.0338 5.80446 14.0338 5.80442 14.0339C5.64601 14.2035 5.38384 14.2117 5.21601 14.0542L5.21598 14.0542C5.04704 13.8958 5.03848 13.6294 5.19547 13.4611L5.1957 13.4609L10.0774 8.22265C10.0774 8.2226 10.0775 8.22254 10.0775 8.22249C10.562 7.70435 11.439 7.70471 11.9222 8.22223C11.9223 8.22229 11.9223 8.22235 11.9224 8.22241L16.8043 13.4618Z"
                  fill="#6B7280"
                  stroke="#6B7280"
                />
              </svg>
            )
          ) : null}
        </div>
      </div>

      {isOn && children}
    </div>
  );
}

export default SettingCard;
