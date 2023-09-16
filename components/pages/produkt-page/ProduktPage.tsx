import Image from "next/image"

const ProduktPage = () => {
  return (
    <div className="relative flex justify-between container w-full  px-[200px] py-28">
      <div className="flex flex-col gap-28">
        <div className="bg-[#EDEEF2] flex flex-col gap-2 justify-center container px-16 w-[563px] h-[222px] border-2 rounded-[60px] shadow-[7px_7px_15px_5px_#00000019]">
          <h1 className="font-semibold text-2xl text-theme-primary">
            PLUGINS
          </h1>
          <p className="text-theme-text">
          Przygotowaliśmy dla Ciebie wtyczki którymi łatwo zintegrujesz się z platformą Vimoni Payment System.
          </p>
        </div>
        <div className="bg-[#EDEEF2] flex flex-col gap-2 justify-center container px-16 w-[563px] h-[222px] border-2 rounded-[60px] shadow-[7px_7px_15px_5px_#00000019]">
          <h1 className="font-semibold text-2xl text-theme-primary">
            REST API
          </h1>
          <p className="text-theme-text">
          Za pomocą API Vimoni Payments System możesz wdrożyć i zarządzać funkcjami istotnymi dla Ciebie
          </p>
        </div>
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

export default ProduktPage
