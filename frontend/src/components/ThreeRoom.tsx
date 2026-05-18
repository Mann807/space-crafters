"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Box } from '@react-three/drei';

export default function ThreeRoom() {
  return (
    <section id="3d-view" className="py-20 bg-gray-50 dark:bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Interactive 3D Room</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Explore furniture and layout in 3D</p>
        </div>
        
        <div className="h-[600px] w-full bg-gray-200 dark:bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-2xl border border-gray-300 dark:border-gray-800">
          <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
            <Environment preset="apartment" background blur={0.5} />
            
            {/* Simple Room representation */}
            <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
              <planeGeometry args={[10, 10]} />
              <meshStandardMaterial color="#e5d9c5" />
            </mesh>

            {/* Furniture Placeholders */}
            <Box position={[0, 0, 0]} args={[2, 1, 1]} castShadow receiveShadow>
              <meshStandardMaterial color="#c29b76" />
            </Box>
            
            <Box position={[-2, 0, -2]} args={[1, 1.5, 1]} castShadow receiveShadow>
              <meshStandardMaterial color="#4a4a4a" />
            </Box>

            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
