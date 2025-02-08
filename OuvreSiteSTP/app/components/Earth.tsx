import { useRef } from "react"
import { useFrame, useLoader } from "@react-three/fiber"
import type { Mesh } from "three"
import { TextureLoader } from "three/src/loaders/TextureLoader"

const AtmosphereShader = {
  vertexShader: `
    varying vec3 vNormal;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec3 vNormal;
    void main() {
      float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
      gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
    }
  `,
}

export default function Earth() {
  const earthRef = useRef<Mesh>(null)
  const atmosphereRef = useRef<Mesh>(null)
  const texture = useLoader(TextureLoader, "/assets/3d/texture_earth.jpg")

  useFrame(({ clock }) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = clock.getElapsedTime() * 0.2
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y = clock.getElapsedTime() * 0.2
    }
  })

  return (
    <group>
      <mesh ref={earthRef}>
        <sphereGeometry args={[0.8, 64, 64]} />
        <meshStandardMaterial map={texture} metalness={0.1} roughness={0.7} />
      </mesh>
      <mesh ref={atmosphereRef} scale={1.05}>
        <sphereGeometry args={[0.8, 64, 64]} />
        <shaderMaterial attach="material" args={[AtmosphereShader]} transparent side={2} />
      </mesh>
    </group>
  )
}

