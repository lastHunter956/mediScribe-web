"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Points, PointMaterial, Float } from "@react-three/drei"
import { useRef, useMemo, useState } from "react"
import type * as THREE from "three"

function AnimatedSphere() {
  const pointsRef = useRef<THREE.Points>(null)
  const [hovered, setHovered] = useState(false)
  const { pointer } = useThree()

  const particlesCount = 5000
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3)
    const colors = new Float32Array(particlesCount * 3)

    // Coral orange color: #FF7F4A
    const baseColor = { r: 1, g: 0.498, b: 0.29 }
    // Secondary color: #FF9F7A
    const accentColor = { r: 1, g: 0.624, b: 0.478 }

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3
      const radius = 2 + Math.random() * 0.8
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)

      // Gradient colors based on position
      const t = Math.random()
      colors[i3] = baseColor.r * (1 - t) + accentColor.r * t
      colors[i3 + 1] = baseColor.g * (1 - t) + accentColor.g * t
      colors[i3 + 2] = baseColor.b * (1 - t) + accentColor.b * t
    }

    return { positions, colors }
  }, [particlesCount])

  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.getElapsedTime()
      
      // Smooth rotation
      pointsRef.current.rotation.y = time * 0.08
      pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1

      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
      const originalPositions = pointsRef.current.userData.originalPositions as Float32Array

      if (!originalPositions) {
        pointsRef.current.userData.originalPositions = positions.slice()
        return
      }

      // Mouse influence
      const mouseInfluence = hovered ? 0.3 : 0.1
      
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3
        const ox = originalPositions[i3]
        const oy = originalPositions[i3 + 1]
        const oz = originalPositions[i3 + 2]

        const distance = Math.sqrt(ox * ox + oy * oy + oz * oz)
        
        // Breathing effect with multiple frequencies
        const breathe = Math.sin(time * 1.5 + distance * 0.3) * 0.15
        const pulse = Math.sin(time * 3 + i * 0.01) * 0.05
        const wave = Math.sin(time * 0.8 + ox * 0.5) * Math.cos(time * 0.6 + oy * 0.5) * 0.1

        const scale = 1 + breathe + pulse + (wave * mouseInfluence)

        // Apply mouse attraction
        const mouseX = pointer.x * 0.5
        const mouseY = pointer.y * 0.5
        
        positions[i3] = ox * scale + mouseX * mouseInfluence * 0.3
        positions[i3 + 1] = oy * scale + mouseY * mouseInfluence * 0.3
        positions[i3 + 2] = oz * scale
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <Points 
        ref={pointsRef} 
        positions={positions} 
        colors={colors}
        stride={3}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <PointMaterial 
          transparent 
          vertexColors
          size={0.035} 
          sizeAttenuation={true} 
          depthWrite={false} 
          opacity={0.9}
          blending={2} // Additive blending for glow
        />
      </Points>
    </Float>
  )
}

// Inner glowing core
function GlowingCore() {
  const coreRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (coreRef.current) {
      const time = state.clock.getElapsedTime()
      const scale = 1 + Math.sin(time * 2) * 0.1
      coreRef.current.scale.setScalar(scale)
    }
  })

  return (
    <mesh ref={coreRef}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshBasicMaterial color="#FF7F4A" transparent opacity={0.3} />
    </mesh>
  )
}

// Orbital rings
function OrbitalRing({ radius, speed, color, opacity }: { radius: number; speed: number; color: string; opacity: number }) {
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ringRef.current) {
      const time = state.clock.getElapsedTime()
      ringRef.current.rotation.x = time * speed
      ringRef.current.rotation.y = time * speed * 0.5
    }
  })

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[radius, 0.01, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  )
}

export default function VoiceSphereCanvas() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 6], fov: 60 }} 
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }} 
      className="w-full h-full"
      dpr={[1, 2]}
    >
      {/* Subtle ambient light */}
      <ambientLight intensity={0.3} />
      
      {/* Key light */}
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#FF7F4A" />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#FF9F7A" />
      
      {/* Main sphere */}
      <AnimatedSphere />
      
      {/* Glowing core */}
      <GlowingCore />
      
      {/* Orbital rings */}
      <OrbitalRing radius={2.8} speed={0.3} color="#FF7F4A" opacity={0.15} />
      <OrbitalRing radius={3.2} speed={-0.2} color="#FF9F7A" opacity={0.1} />
    </Canvas>
  )
}
