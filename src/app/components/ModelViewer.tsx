'use client'

import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

interface ModelViewerProps {
  modelPath: string
  initialCameraPosition?: THREE.Vector3
}

const ModelViewer: React.FC<ModelViewerProps> = ({
  modelPath,
  initialCameraPosition = new THREE.Vector3(0, 5, 10)
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x111827) // Dark background to match the site theme

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000)
    camera.position.copy(initialCameraPosition)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(0, 10, 0)
    scene.add(directionalLight)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05

    // Load the 3D model
    const loader = new GLTFLoader()
    loader.load(
      modelPath,
      (gltf) => {
        scene.add(gltf.scene)
        
        // Center the model
        const box = new THREE.Box3().setFromObject(gltf.scene)
        const center = box.getCenter(new THREE.Vector3())
        gltf.scene.position.sub(center)
        
        // Adjust camera to fit the model
        const size = box.getSize(new THREE.Vector3())
        const maxDim = Math.max(size.x, size.y, size.z)
        const fov = camera.fov * (Math.PI / 180)
        let cameraZ = Math.abs(maxDim / 2 * Math.tan(fov / 2))
        camera.position.z = cameraZ * 2
        camera.updateProjectionMatrix()

        setIsLoading(false) // Set loading to false when the model is loaded
      },
      undefined,
      (error) => console.error('An error occurred loading the model:', error)
    )

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [modelPath, initialCameraPosition])

  return (
    <div className="border-4 border-purple-300 rounded-lg overflow-hidden relative">
      <div ref={containerRef} className="w-full h-[500px]" />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-300"></div>
        </div>
      )}
    </div>
  )
}

export default ModelViewer
