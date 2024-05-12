import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (

    <main className="w-screen h-screen relative">
      <div className='flex items-center w-full h-full bg-cover bg-center' style={{backgroundImage: "url(/assets/main-bg.webp)"}} >
        <div className="pl-20 pb-56 md:pl-40 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <>
            <h1 className="text-[50px] text-white font-semibold">
              Dream, Design, & Implement
            </h1>
            <h2 className="text-[35px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                3 steps of solution creation
            </h2>
          </>
          <p className="text-gray-200 hidden md:block">
            “If you talk about it, it’s a dream, if you envision it, it’s possible, but if you <span className="underline underline-offset-2 font-extrabold">schedule it</span>, it’s real.” — Anthony Robbins 
          </p>
          {/* Desktop version */}
          <div className="flex-col md:flex-row md:flex hidden gap-5">
            <Link href="/stacks" className="rounded-[20px] group relative bg-blue-500 hover:bg-purple-900 px-5 py-3 text-lg text-white max-w-[200px]">
              Stacks
            </Link>
            <Link href="/projects" className="rounded-[20px] group relative bg-blue-500 hover:bg-purple-900 px-5 py-3 text-lg text-white max-w-[200px]">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"/>
              Projects
            </Link>
            <Link href="/contacts" className="rounded-[20px] group relative bg-blue-500 hover:bg-purple-900 px-5 py-3 text-lg text-white max-w-[200px]">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"/>
              Schedule it
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link href="/stacks" className="rounded-[20px] group bg-blue-500 hover:bg-purple-900 px-5 py-3 text-lg text-white max-w-[200px]">
          My Stacks
        </Link>
        <Link href="/projects" className="rounded-[20px] group bg-blue-500 hover:bg-purple-900 px-5 py-3 text-lg text-white max-w-[200px]">
          My Projects
        </Link>
        <Link href="/contacts" className="rounded-[20px] group bg-blue-500 hover:bg-purple-900 px-5 py-3 text-lg text-white max-w-[200px]">
          Contact
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
        src="/assets/horse.png" 
        alt="horse" 
        width={300} 
        height={300}
        className="absolute right-55 top-40"
        />
        <Image src="/assets/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
        src="/assets/trees.webp" alt="trees" width={2000} height={2000}
        className="w-full h-full"
        />
      </div>
      <Image
        src="/assets/stars.png" 
        alt="stars" 
        width={300} 
        height={300}
        className="absolute top-10 left-0 z-[10]"
        />

    </main>
  );
}
