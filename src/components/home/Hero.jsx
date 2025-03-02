import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-gray-400"
        >
          Hi There, I'm
        </motion.div>
        <h1 className="font-light tracking-wider bg-gradient-to-r from-[#ff2764] to-[#00d0ff] bg-clip-text text-transparent text-5xl md:text-7xl lg:text-8xl">
          SIDDHARTH
        </h1>
        <h1 className="font-light tracking-wider bg-gradient-to-r from-[#ff2764] to-[#00d0ff] bg-clip-text text-transparent text-5xl md:text-7xl lg:text-8xl pl-[10%]">
          NASHIKKAR
        </h1>
      </div>
    </motion.div>
  );
};
export default Hero;