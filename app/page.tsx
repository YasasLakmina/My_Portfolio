import Hero from "@/components/Hero";
import { MeteorsDemo } from "@/components/metTest";
import Image from "next/image";
import { Meteors } from "../components/ui/meteors";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Meteors number={40} />
      <div className="relative z-10 max-w-7xl w-full flex justify-center items-center">
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
