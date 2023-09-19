import Button from "@/components/core/button";
import Image from "next/image";

const MainPage = () => {
  return (
    <div className="relative container w-full px-10 xl:container py-48">
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
      <div className="relative space-y-8">
        <h1 className="font-semibold text-5xl sm:text-6xl text-theme-primary">
          Wybierz Vimoni
        </h1>
        <p className="text-theme-text text-xl sm:text-2xl max-w-[640px]">
          Sprawdź nowoczesne usługi płatnicze dla eCommerce dzięki platformie
          Vimoni Smart Payment Systems
        </p>
        <Button title="Wiecej" className="w-max" />
      </div>
    </div>
  );
};

export default MainPage;
