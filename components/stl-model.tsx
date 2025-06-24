"use client"

import { useRef, useState } from "react"
import { useFrame, useLoader } from "@react-three/fiber"
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js"
import type { Mesh } from "three"
import { useMousePosition } from "@/hooks/use-mouse-position"

export function STLModel() {
  const meshRef = useRef<Mesh>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const mousePosition = useMousePosition()

  // Load the STL model
  const geometry = useLoader(STLLoader, "/models/scan30.stl")

  // Handle loading state
  useState(() => {
    if (geometry) {
      setIsLoaded(true)
    }
  })

  useFrame(() => {
    if (meshRef.current && isLoaded) {
      // Smooth rotation based on mouse position
      meshRef.current.rotation.y = mousePosition.x * 0.5
      meshRef.current.rotation.x = mousePosition.y * -0.5
    }
  })

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <mesh ref={meshRef} geometry={geometry} scale={[0.1, 0.1, 0.1]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshNormalMaterial />
      </mesh>
    </>
  )
}
