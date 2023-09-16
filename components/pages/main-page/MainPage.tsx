import Image from "next/image"

const MainPage = () => {
  return (
    <div className="relative flex justify-between container w-full  px-[200px] py-48">
      <div className="flex flex-col gap-8">
        <h1 className="font-semibold text-6xl text-theme-primary">
          Wybierz Vimoni
        </h1>
        <p className="text-theme-text text-2xl w-[640px]">
        Sprawdź nowoczesne usługi płatnicze dla eCommerce dzięki platformie Vimoni Smart Payment Systems
        </p>
        <button className="w-[142px] h-[44px] text-theme-text shadow-[7px_7px_15px_5px_#00000019]  rounded-xl hover:bg-theme-secondary hover:text-white">
        <a className="place-self-center"> Wiecej</a>
    </button>
      </div>
        <div className="absolute -right-[340px] -top-0 flex aspect-square w-[700px] h-[700px]">
      <Image 
          src="/images/Component2.png"
          alt="Placeholder"
          fill={true}
        />
      </div>
    </div>
  )
}

export default MainPage
