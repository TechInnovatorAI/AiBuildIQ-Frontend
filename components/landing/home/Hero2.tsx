"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import headerImage from "@/public/assets/header.jpg";
import { Box } from "@/components/ui/box";

const Hero = () => {
  return (
    <motion.section 
      className="bg-white dark:bg-gray-900 sm:container relative"
      style={{ maxWidth: '100%'}}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={headerImage.src}
            alt="header"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '80vh', clipPath: 'inset(0 0 30% 0)' }}
            className="opacity-50"
          />
        </motion.div>
        <motion.div 
          className="absolute inset-0 flex items-end ml-[20vw]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              width="w-[40vw]"
              height="h-[50vh]"
              backgroundColor="bg-[#f2f2f2]"
              letter1="Experience the Future of Real Estate Financing with AIBuildIQ"
              letter2="Whether you're a lender seeking quality leads, a broker looking to close deals faster, or a borrower in search of the best loan, AIBuildIQ is the innovative platform that brings simplicity and precision to real estate financing."
              buttons={[
                { text: "BORROWERS", variant: "outline" },
                { text: "BROKERS", variant: "default" },
                { text: "LENDERS", variant: "default" }
              ]}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
