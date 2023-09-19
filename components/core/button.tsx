import React from 'react'

type propTypes = {
  title: string;
  className?: string;
}

const Button = ({ title, className = '' }: propTypes) => {
  return (
    <button className={`${className} text-theme-text btn-shadow px-8 h-[40px] rounded-xl`}>
      {title}
    </button>
  )
}

export default Button
