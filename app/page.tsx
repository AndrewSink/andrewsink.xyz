"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { STLModel } from "@/components/stl-model"
import { ProfileSection } from "@/components/profile-section"
import { LinksSection } from "@/components/links-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* 3D Model Container */}
      <div className="relative h-80 w-full">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }} className="absolute inset-0">
          <Suspense fallback={null}>
            <STLModel />
          </Suspense>
        </Canvas>
      </div>

      {/* Main Content */}
      <div className="relative z-10 -mt-20">
        <div className="container mx-auto max-w-2xl px-4 pb-12">
          <ProfileSection />
          <LinksSection />
          <Footer />
        </div>
      </div>
    </div>
  )
}
