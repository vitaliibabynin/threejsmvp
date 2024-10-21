'use client'

import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

const AnimatedBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Create net
    const geometry = new THREE.BufferGeometry()
    const material = new THREE.LineBasicMaterial({ color: 0x8a2be2, transparent: true, opacity: 0.2 })

    const points = []
    const gridSize = 20
    const spacing = 2

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        points.push(
          new THREE.Vector3(i * spacing - (gridSize * spacing) / 2, j * spacing - (gridSize * spacing) / 2, 0)
        )
      }
    }

    geometry.setFromPoints(points)
    const net = new THREE.LineSegments(geometry, material)
    scene.add(net)

    camera.position.z = 30

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      net.rotation.x += 0.001
      net.rotation.y += 0.001

      renderer.render(scene, camera)
    }
    animate()

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />
}

export default AnimatedBackground
