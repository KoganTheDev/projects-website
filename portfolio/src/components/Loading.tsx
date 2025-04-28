import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const NeuralNetwork = () => {
  const nodes = 5;
  const layers = 3;
  const spacing = 40;

  return (
    <div className="relative w-64 h-64">
      {/* Nodes */}
      {[...Array(layers)].map((_, layer) => (
        <div key={layer} className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          {[...Array(nodes)].map((_, node) => (
            <motion.div
              key={`${layer}-${node}`}
              className="absolute w-4 h-4 bg-blue-500 rounded-full"
              style={{
                left: `${50 + (layer - 1) * spacing}%`,
                top: `${(node / (nodes - 1)) * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: (layer + node) * 0.1,
              }}
            />
          ))}
        </div>
      ))}

      {/* Connections */}
      {[...Array(layers - 1)].map((_, layer) => (
        [...Array(nodes)].map((_, node) => (
          [...Array(nodes)].map((_, nextNode) => (
            <motion.div
              key={`${layer}-${node}-${nextNode}`}
              className="absolute w-0.5 bg-blue-400"
              style={{
                left: `${50 + (layer - 0.5) * spacing}%`,
                top: `${(node / (nodes - 1)) * 100}%`,
                height: `${Math.abs((nextNode - node) / (nodes - 1)) * 100}%`,
                transform: `translate(-50%, ${node < nextNode ? '0' : '-100%'})`,
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: (layer + node + nextNode) * 0.05,
              }}
            />
          ))
        ))
      ))}
    </div>
  );
};

const BinaryRain = () => {
  const columns = 20;
  const rows = 20;
  const characters = ['0', '1'];

  return (
    <div className="relative w-64 h-64 overflow-hidden">
      {[...Array(columns)].map((_, col) => (
        <div key={col} className="absolute top-0 left-0 w-full h-full">
          {[...Array(rows)].map((_, row) => (
            <motion.div
              key={`${col}-${row}`}
              className="absolute text-green-500 font-mono text-xs"
              style={{
                left: `${(col / columns) * 100}%`,
                top: `${(row / rows) * 100}%`,
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, 100],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: col * 0.1 + row * 0.05,
              }}
            >
              {characters[Math.floor(Math.random() * characters.length)]}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

const HorizontalBinaryRain = () => {
  const rows = 15;
  const columns = 30;
  const characters = ['0', '1'];

  return (
    <div className="relative w-64 h-64 overflow-hidden">
      {[...Array(rows)].map((_, row) => (
        <div key={row} className="absolute top-0 left-0 w-full h-full">
          {[...Array(columns)].map((_, col) => (
            <motion.div
              key={`${row}-${col}`}
              className="absolute text-green-500 font-mono text-xs"
              style={{
                left: `${(col / columns) * 100}%`,
                top: `${(row / rows) * 100}%`,
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: [0, 1, 0],
                x: [0, 100],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: row * 0.1 + col * 0.05,
              }}
            >
              {characters[Math.floor(Math.random() * characters.length)]}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

const CircuitBoard = () => {
  const paths = 8;
  const segments = 5;

  return (
    <div className="relative w-64 h-64">
      {[...Array(paths)].map((_, path) => (
        <motion.div
          key={path}
          className="absolute w-full h-full"
          style={{
            transform: `rotate(${(path * 360) / paths}deg)`,
          }}
        >
          {[...Array(segments)].map((_, segment) => (
            <motion.div
              key={segment}
              className="absolute w-1 h-8 bg-blue-400"
              style={{
                left: `${(segment / segments) * 100}%`,
                top: '50%',
                transform: 'translateY(-50%)',
              }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: (path + segment) * 0.1,
              }}
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
};

const ProgressBar = ({ progress = 0 }: { progress?: number }) => {
  return (
    <div className="relative w-64 h-10 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden shadow-inner">
      <motion.div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-600"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{
          duration: 0.2,
          ease: "easeOut"
        }}
      />
      <motion.div
        className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-mono font-medium">
        {Math.round(progress)}%
      </div>
    </div>
  );
};

const ServerBoot = () => {
  const bootLines = [
    "> Initializing system...",
    "> Loading core modules...",
    "> Establishing network connections...",
    "> Verifying system integrity...",
    "> Starting services...",
    "> System ready.",
  ];

  const asciiArt = `
   ██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗
   ██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝
   ██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  
   ██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  
   ╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗
    ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
  `;

  return (
    <div className="relative w-64 h-64 font-mono text-green-500 text-xs">
      <motion.pre 
        className="text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >
        {asciiArt}
      </motion.pre>
      <div className="space-y-1">
        {bootLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.5 + index * 0.5,
            }}
          >
            {line}
          </motion.div>
        ))}
      </div>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
    </div>
  );
};

const LoadingAnimations = [
  NeuralNetwork,
  BinaryRain,
  HorizontalBinaryRain,
  CircuitBoard,
  ProgressBar,
  ServerBoot,
];

export const Loading = () => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setAnimationIndex(Math.floor(Math.random() * LoadingAnimations.length));
    
    // Simulate loading progress to reach 100% in 3 seconds
    const startTime = Date.now();
    const duration = 3000; // 3 seconds in milliseconds
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(newProgress);
      
      if (newProgress >= 100) {
        clearInterval(interval);
      }
    }, 16); // ~60fps for smooth animation

    return () => clearInterval(interval);
  }, []);

  const CurrentAnimation = LoadingAnimations[animationIndex];

  return (
    <div className="fixed inset-0 bg-white dark:bg-dark-federal flex items-center justify-center z-50">
      <div className="text-center space-y-12">
        {CurrentAnimation === ProgressBar ? (
          <ProgressBar progress={progress} />
        ) : (
          <CurrentAnimation />
        )}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-gray-600 dark:text-gray-300"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
}; 