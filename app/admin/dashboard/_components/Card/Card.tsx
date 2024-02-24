import React from "react";
interface Props {
  heading: string;
  value: string;
  percentage?: string;
}
function Card(props: Props) {
  const { heading, value ,percentage} = props;
  return (
    <div className="w-full p-6 flex flex-col gap-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-2xl leading-125 font-bold text-gray-900">{heading} <span className="text-green-600 text-base font-medium">(+{percentage})</span></h2>
        <p className="text-base font-normal text-gray-500 leading-150">{value}</p>
    </div>
  );
}

export default Card;
