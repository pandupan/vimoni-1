import Image from "next/image";
import Link from "next/link";
import { BsFillBuildingFill, BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Firmie1Page = () => {
  return (
    <div className="relative flex justify-between container w-full px-10 xl:container py-28">
      <div className="flex flex-col">
        <h2 className="text-theme-primary underline underline-offset-4 font-bold text-3xl py-2">
          Zespół
        </h2>
        <div className="max-w-[600px] flex flex-col gap-4">
          <p className="text-theme-text">
            Jesteśmy grupą doświadczonych przedsiębiorców i inżynierów z
            przełomowymi pomysłami, które chcemy wykorzystać, by przyczynić się
            do tworzenia lepszego jutra. Zapewniamy inteligentna rozwiązania
            firmom każdej wielkości i jesteśmy dumni z naszych wyjątkowych,
            spersonalizowanych usług. Vimoni Smart Payment Services tworzą
            wyjątkowi ludzie z pasją i ogromnym doświadczeniem w branży
            płatniczej oraz IT.
          </p>
          <div className="flex gap-20 text-theme-text">
            <ul className="space-y-2">
              <li className="border-b border-[#D4D5D9]">
                Magdalena Chaszczyńska
              </li>
              <li className="border-b border-[#D4D5D9]">Monika Gala</li>
              <li>Michał Matej</li>
            </ul>
            <ul className="space-y-2">
              <li className="border-b border-[#D4D5D9]">Jarosław Gzieto</li>
              <li>Damian Stawiarski</li>
            </ul>
          </div>
          <div className="bg-[#EDEEF2] px-8 max-w-[563px] border-2 rounded-lg box-card text-theme-text py-4 mt-2">
            <h1 className="uppercase font-semibold text-lg">
              Vimoni Smart Payment Services Sp z o.o.
            </h1>
            <p className="uppercase">
              KRS: 0001009022 | NIP: 6751775420 | REGON: 523979275
            </p>
            <div className="flex gap-2">
              <BsFillBuildingFill size={15} />
              <p>Życzkowskiego 14, 31-864 Kraków, Polska </p>
            </div>
            <div className="flex gap-2">
              <BsTelephoneFill size={15} />
              <p>+48 661 321 610</p>
            </div>
            <div className="flex gap-2">
              <MdEmail size={15} />
              <p>info@vimoni.pl</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center mt-8">
          <Link href="/firmie1">
            <span className="block font-semibold text-theme-text items-center text-sm underline underline-offset-4">
              Jak zaczeliśmy →
            </span>
          </Link>
        </div>
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

export default Firmie1Page;
