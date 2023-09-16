import React from 'react'

type propTypes = {
  title : string;
}

const Button = ({title} : propTypes) => {
  return (
    <button className="text-theme-text shadow-[7px_7px_15px_5px_#00000019] px-8 h-[40px]  rounded-xl hover:bg-theme-secondary hover:text-white">
      <a className='place-self-center'>
      {title}  
      </a>
    </button>
  )
}

export default Button
