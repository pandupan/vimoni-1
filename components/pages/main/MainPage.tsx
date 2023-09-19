import Button from "@/components/core/button";
import Image from "next/image";

const MainPage = () => {
  return (
    <div className="relative container w-full px-10 xl:container py-48">
      <div className="absolute -right-[340px] -top-0 flex w-[700px] aspect-square">
        <Image src="/images/Component2.png" alt="Placeholder" fill={true} />
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
