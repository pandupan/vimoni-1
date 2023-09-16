import Image from "next/image"

const Firmie1Page = () => {
  return (
    <div className="relative flex justify-between container w-full  px-[200px] py-28">
      <div className="flex flex-col gap-12">
        <h1 className="text-theme-primary font-bold text-5xl">
        NASZA HISTORIA
        </h1>
        <h2 className="text-theme-primary underline underline-offset-4 font-bold text-3xl">
        Jak zaczęliśmy
        </h2>
        <div className="w-[600px] h-[296px] flex flex-col gap-4 -mt-6">
        <p className="text-theme-text">
        W 2022 roku podczas jednego ze spotkań branżowych narodził się pomysł zbudowania prawdziwie &quot;chmurowego&quot; rozwiązania płatniczego, które zapewni skalowalność ale przede wszystkim bezpieczeństwo transakcji płatniczych swoim klientom.
        </p>
        <p className="text-theme-text">
        Od pomysłu do realizacji minęło kilka mesięcy, kiedy to kompletowaliśmy zespół doswiadczonych specjalitów z obszaru IT, płatności online i bezpieczeństwa. Na początku 2023 roku uzyskaliśmy wpis na listę KNF jako Mała Instytucja Płatnicza. Następnie staliśmy się członkiem Polskiego Standardu Płatności, co pozwala nam bezpśrednio oferować płatności BLIK. Tak oto rozwijamy swoją działalność i każdego dnia dokładamy kolejne elmenty do naszej układanki tworząc wyjątkowe rozwiązanie płatnicza w skali Polski i Europy. 
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

export default Firmie1Page