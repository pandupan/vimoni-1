import Image from "next/image";
import Link from "next/link";

const Firmie1Page = () => {
  return (
    <div className="relative flex justify-between container w-full px-10 xl:container pt-28 pb-14">
      <div className="flex flex-col gap-12">
        <h1 className="text-theme-primary font-bold text-5xl">
          NASZA HISTORIA
        </h1>
        <h2 className="text-theme-primary underline underline-offset-4 font-bold text-3xl">
          Jak zaczęliśmy
        </h2>
        <div className="max-w-[600px] flex flex-col gap-4 -mt-6">
          <p className="text-theme-text">
            W 2022 roku podczas jednego ze spotkań branżowych narodził się
            pomysł zbudowania prawdziwie &quot;chmurowego&quot; rozwiązania
            płatniczego, które zapewni skalowalność ale przede wszystkim
            bezpieczeństwo transakcji płatniczych swoim klientom.
          </p>
          <p className="text-theme-text">
            Od pomysłu do realizacji minęło kilka mesięcy, kiedy to
            kompletowaliśmy zespół doswiadczonych specjalitów z obszaru IT,
            płatności online i bezpieczeństwa. Na początku 2023 roku uzyskaliśmy
            wpis na listę KNF jako Mała Instytucja Płatnicza. Następnie staliśmy
            się członkiem Polskiego Standardu Płatności, co pozwala nam
            bezpśrednio oferować płatności BLIK. Tak oto rozwijamy swoją
            działalność i każdego dnia dokładamy kolejne elmenty do naszej
            układanki tworząc wyjątkowe rozwiązanie płatnicza w skali Polski i
            Europy.
          </p>
        </div>
        <div className="flex justify-end items-center mt-8">
          <Link href="/firmie2">
            <h2 className="text-theme-text items-center text-sm underline underline-offset-4">
              Zespół →
            </h2>
          </Link>
        </div>
      </div>
      <div className="absolute -right-[340px] -top-0 flex aspect-square w-[700px] h-[700px]">
      <div className="flex justify-center items-center aspect-square w-[471px] h-[471px] border border-[#f2d6bb] rounded-full">
            <div className="border border-[#8e7e6e] rounded-full h-[120px] w-[120px] bg-[#8e7e6e]"></div>
          <div className="absolute  transform rotate-45 items-center w-[570px] h-[341px] border-[#d9dade] border rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Firmie1Page;
