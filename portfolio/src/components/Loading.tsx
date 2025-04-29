import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Reusable animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
};

// Neural Network Component
const NeuralNetwork = () => {
  const nodes = 5;
  const layers = 3;
  const spacing = 40;

  return (
    <div className="relative w-64 h-64">
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
    </div>
  );
};

// Binary Rain Component
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

// Circuit Board Component
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

// Progress Bar Component
const ProgressBar = ({ progress = 0 }: { progress?: number }) => {
  return (
    <div className="relative w-64 h-10 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden shadow-inner">
      <motion.div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-federal-blue to-pacific-cyan"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-mono font-medium">
        {Math.round(progress)}%
      </div>
    </div>
  );
};

// Server Boot Component
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
        {...fadeInUp}
      >
        {asciiArt}
      </motion.pre>
      <div className="space-y-1">
        {bootLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 + index * 0.5 }}
          >
            {line}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Main Loading Component
export const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [currentAnimation, setCurrentAnimation] = useState(() => 
    Math.floor(Math.random() * 4)
  );

  useEffect(() => {
    // Simulate different loading stages with faster timing
    const loadingStages = [
      { target: 30, duration: 300 },  // Initial loading
      { target: 60, duration: 400 },  // Loading resources
      { target: 85, duration: 500 },  // Processing
      { target: 100, duration: 300 }  // Complete
    ];

    let currentStage = 0;
    let startTime = Date.now();
    let lastProgress = 0;

    const updateProgress = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const stage = loadingStages[currentStage];
      
      if (elapsed >= stage.duration) {
        lastProgress = stage.target;
        setProgress(stage.target);
        currentStage++;
        startTime = now;
        
        if (currentStage >= loadingStages.length) {
          return;
        }
      } else {
        const progress = lastProgress + 
          ((stage.target - lastProgress) * (elapsed / stage.duration));
        setProgress(progress);
      }
      
      requestAnimationFrame(updateProgress);
    };

    requestAnimationFrame(updateProgress);

    return () => {
      // Cleanup will be handled by the animation frame
    };
  }, []);

  const animations = [
    NeuralNetwork,
    BinaryRain,
    CircuitBoard,
    ServerBoot
  ];

  const CurrentAnimation = animations[currentAnimation];

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-dark-federal">
      <motion.div
        className="flex flex-col items-center gap-8"
        {...fadeIn}
      >
        <CurrentAnimation />
        <ProgressBar progress={progress} />
      </motion.div>
    </div>
  );
}; 