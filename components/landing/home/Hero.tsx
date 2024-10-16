"use client";
import Image from "next/image";
import headerImage from "@/public/assets/header.jpg";
import { Box } from "@/components/ui/box";

const Hero = () => {
  return (
    <section 
      className="bg-white dark:bg-gray-900 sm:container relative"
      style={{ maxWidth: '100%'}}
    >
      <div className="relative">
        <Image
          src={headerImage.src}
          alt="header"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '90vh', clipPath: 'inset(0 0 30% 0)' }}
          className="opacity-50"
        />
        <div className="absolute inset-0 flex items-end ml-[20vw] mr-[30vw]">
          <Box
            width="w-[40vw]"
            height="h-[40vh]"
            backgroundColor="bg-[#f2f2f2]"
            letter1="AI-Driven Solutions for Smarter Lending"
            letter2="Revolutionizing how brokers and borrowers seamlessly navigate the lending process with AI-powered precision"
            buttons={[
              { text: "FUNDING REQUEST", variant: "outline" },
              { text: "DISCOVER OUR SERVICES", variant: "default" }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
