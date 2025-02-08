"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import Earth from "./components/Earth"
import EnhancedTitle from "./components/EnhancedTitle"

export default function Home() {
  return (
    <main className="relative w-full h-screen bg-black">
      <Canvas camera={{ position: [0, 0, 2.7], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <Stars radius={300} depth={60} count={1000} factor={4} saturation={0} fade speed={1} />
        <Earth />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
      <EnhancedTitle />
    </main>
  )
}

