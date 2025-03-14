import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

export default function CardComponent({
  title,
  description,
  image,
}: CardProps) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      className="flex w-[200px] md:w-auto lg:w-auto max-w-[300px] items-center h-fit md:min-h-[350px] lg:min-h-[430px] min-h-[300px] flex-col bg-white drop-shadow-lg border border-gray-300 rounded-lg gap-5 md:gap-10 cursor-pointer"
      onClick={() => setShowDescription(!showDescription)}
    >
      <img
        src={image}
        alt="logo"
        className="h-[200px] w-full lg:h-[300px] rounded-t-lg "
      />
      <div className=" h-1/2 pb-2 px-1  ">
        <p className="font-poppins text-center font-bold text-md md:text-xl ">
          {title}
        </p>
        <AnimatePresence>
          {showDescription && (
            <motion.p
              className="font-poppins mt-5 px-1 text-justify lg:pb-5 text-sm lg:text-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
