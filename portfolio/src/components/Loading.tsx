import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const treeVariants = {
  initial: {
    pathLength: 0,
    opacity: 0,
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const treePaths = [
  // Tree 1
  <motion.path
    key="tree1"
    d="M50,100 L50,20 L30,40 L70,40 L50,20 L50,60 L30,80 L70,80 L50,60"
    stroke="#3b82f6"
    strokeWidth="2"
    fill="none"
    variants={treeVariants}
  />,
  // Tree 2
  <motion.path
    key="tree2"
    d="M50,100 L50,30 L35,45 L65,45 L50,30 L50,50 L40,60 L60,60 L50,50 L50,70 L40,80 L60,80 L50,70"
    stroke="#3b82f6"
    strokeWidth="2"
    fill="none"
    variants={treeVariants}
  />,
  // Tree 3
  <motion.path
    key="tree3"
    d="M50,100 L50,40 L40,50 L60,50 L50,40 L50,60 L45,65 L55,65 L50,60 L50,75 L45,80 L55,80 L50,75"
    stroke="#3b82f6"
    strokeWidth="2"
    fill="none"
    variants={treeVariants}
  />,
];

export const Loading = () => {
  const [currentTree, setCurrentTree] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTree((prev) => (prev + 1) % treePaths.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-dark-federal flex items-center justify-center z-50">
      <motion.svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {treePaths[currentTree]}
      </motion.svg>
    </div>
  );
}; 