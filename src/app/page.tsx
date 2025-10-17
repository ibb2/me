import Image from "next/image";
import Me from "./me/page";

export default function Home() {
  return (
    <div className="relative font-sans grid grid-rows-[minmax(0,0.4fr)_1fr_20px] justify-items-center min-h-screen overflow-hidden">
      <div className="absolute top-[-1rem] md:top-[-2.5rem] lg:top-[-6rem] left-[-0.5rem] md:left-[-1rem] lg:left-[-3rem] row-start-1">
        <h1 className="font-extrabold tracking-tight leading-none text-balance text-black/90 select-none text-[clamp(4rem,20vw,20rem)]">
          Ibrahim
        </h1>
      </div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start md:w-2/5 -mt-56 md:-mt-24 lg:mt-0 px-4">
        <Me />
      </main>
      {/*<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>*/}
    </div>
  );
}
