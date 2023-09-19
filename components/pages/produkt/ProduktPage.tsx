import Image from "next/image";
import Link from "next/link";

const ProduktPage = () => {
  return (
    <div className="relative flex justify-between w-full px-10 xl:container py-28">
      <div className="flex flex-col gap-20">
        <Link href="/plugins">
          <div className="bg-[#EDEEF2] flex flex-col gap-2 justify-center px-16 max-w-[563px] h-[222px] border-2 rounded-[60px] shadow-[7px_7px_15px_5px_#00000019]">
            <h1 className="font-semibold text-2xl text-theme-primary">
              PLUGINS
            </h1>
            <p className="text-theme-text">
              Przygotowaliśmy dla Ciebie wtyczki którymi łatwo zintegrujesz się
              z platformą Vimoni Payment System.
            </p>
          </div>
        </Link>
        <Link href="/api">
          <div className="bg-[#EDEEF2] flex flex-col gap-2 justify-center px-16 max-w-[563px] h-[222px] border-2 rounded-[60px] shadow-[7px_7px_15px_5px_#00000019]">
            <h1 className="font-semibold text-2xl text-theme-primary">
              REST API
            </h1>
            <p className="text-theme-text">
              Za pomocą API Vimoni Payments System możesz wdrożyć i zarządzać
              funkcjami istotnymi dla Ciebie
            </p>
          </div>
        </Link>
      </div>
      <div className="absolute -right-[340px] top-32 flex w-[700px] aspect-square">
      <div className="flex justify-center items-center aspect-square w-[471px] h-[471px] border border-[#f2d6bb] rounded-full">
          <div
            className="border border-[#8e7e6e] rounded-full h-[120px] w-[120px] bg-[#8e7e6e] box-shadow: 10px 10px 122px -28px rgba(0,0,0,0.75);
            -webkit-box-shadow: 10px 10px 122px -28px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 122px -28px rgba(0,0,0,0.75);"
          ></div>
          <div className="absolute  transform rotate-45 items-center w-[570px] h-[341px] border-[#d9dade] border rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProduktPage;
