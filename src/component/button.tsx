import Image from 'next/image';
import React from 'react';
type ButtonProps ={
  type:"button"|"submit";
  title:string;
  icon?:string;
  variant:string;
  full?:boolean
}
const Button = ({type,icon,variant,title,full}:ButtonProps) => {
  return (
    <button 
    className={`flexCenter gap-3 rounded-full border ${variant} ${full && `w-full`}`}
    type={type}
    >
      {icon && <Image src={icon} width={24} height={24} alt='icon'  />}
      <label className=' bold-16 whitespace-nowrap cursor-pointer'>{title}</label>
    </button>
  );
}

export default Button;
