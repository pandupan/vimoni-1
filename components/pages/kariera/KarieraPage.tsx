import Image from "next/image";

const KarieraPage = () => {
  return (
    <div className="relative flex justify-between w-full px-10 xl:container pt-28 pb-56">
      <div className="space-y-14">
        <div className="flex flex-col gap-2">
          <h1 className="text-theme-primary font-semibold text-xl">
            KOORDYNATOR DS. FINANSÓW I OPERACJI
          </h1>
          <p className="text-theme-text w-[597px]">
            Dołącz jako Koordynator ds. finansów i operacji. Nasza organizacja
            szuka utalentowanej osoby, która wzmocni nasz zespół. Czekamy na
            Ciebie.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-theme-primary font-semibold text-xl">
            KIEROWNIK BIURA
          </h1>
          <p className="text-theme-text w-[597px]">
            Zostań członkiem naszego zespołu. Dołącz już teraz. Wzmocnimy naszą
            organizację, szukamy utalentowanej osoby. Czekamy na Ciebie.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-theme-primary font-semibold text-xl">
            MENEDŻER DS. SPRZEDAŻY
          </h1>
          <p className="text-theme-text w-[597px]">
            Stań się Menedżerem ds. sprzedaży. Przyłącz się do naszego zespołu.
            Szukamy utalentowanej osoby, która wzmocni naszą organizację.
            Czekamy na Ciebie.
          </p>
        </div>
      </div>
      <div className="absolute -right-[340px] -top-0 flex aspect-square w-[700px] h-[700px]">
        <Image src="/images/Component2.png" alt="Placeholder" fill={true} />
      </div>
    </div>
  );
};

export default KarieraPage;
