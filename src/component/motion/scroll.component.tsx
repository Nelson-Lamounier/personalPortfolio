import { useEffect, FC, ReactNode} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


interface ScrollSectionProps {
    children: ReactNode; // Accept children
  }

const ScrollSection: FC<ScrollSectionProps>  = ({children}) => {
  const controls = useAnimation(); // Control animations
  const { ref, inView } = useInView({ threshold: 0.2 }); // Detect when section is in view

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.6 }}
    > <div>{children}</div></motion.div>
  );
};

export default ScrollSection;
