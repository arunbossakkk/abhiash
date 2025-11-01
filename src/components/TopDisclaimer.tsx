"use client";

import { motion } from "framer-motion";

const TopDisclaimer = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-[60] overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700 shadow-md">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="whitespace-nowrap py-2"
      >
        <p className="text-[13px] sm:text-sm md:text-base font-light text-amber-300 tracking-wide px-4">
          ⚠️ <span className="font-semibold text-yellow-200">Disclaimer:</span> FinAX is
          <span className="font-semibold text-yellow-200"> not SEBI-registered.</span> It operates
          as a franchise of a SEBI-registered broker and provides access to a trading platform through them.
        </p>
      </motion.div>
    </div>
  );
};

export default TopDisclaimer;
