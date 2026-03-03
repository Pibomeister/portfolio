'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three/webgpu'

import {
  abs,
  add,
  blendScreen,
  float,
  mod,
  mx_cell_noise_float,
  oneMinus,
  smoothstep,
  texture,
  uniform,
  uv,
  vec2,
  vec3,
} from 'three/tsl'

const SWEEP_PERIOD = 8.0
const SWEEP_MARGIN = 0.05

function sweepProgress(elapsed: number): number {
  const phase = ((elapsed % SWEEP_PERIOD) + SWEEP_PERIOD) % SWEEP_PERIOD
  const t = phase / SWEEP_PERIOD
  const triangle = t < 0.5 ? t * 2 : 2 - t * 2
  return SWEEP_MARGIN + triangle * (1 - 2 * SWEEP_MARGIN)
}

export function HeroFuturistic() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let disposed = false
    let cleanup: (() => void) | null = null

    async function init() {
      const el = container!

      const renderer = new THREE.WebGPURenderer({
        antialias: true,
        alpha: true,
      } as any)
      await renderer.init()

      if (disposed) {
        renderer.dispose()
        return
      }

      renderer.toneMapping = THREE.NoToneMapping
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

      const { clientWidth: w, clientHeight: h } = el
      renderer.setSize(w, h)
      el.appendChild(renderer.domElement)

      const scene = new THREE.Scene()
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
      camera.position.z = 0.5

      // Load textures
      const loader = new THREE.TextureLoader()
      const [rawMap, depthMap] = await Promise.all([
        loader.loadAsync('/hero/scene-texture.png'),
        loader.loadAsync('/hero/scene-depth.webp'),
      ])

      if (disposed) {
        renderer.dispose()
        return
      }

      // --- Build TSL material ---
      const uPointer = uniform(new THREE.Vector2(0, 0))
      const uProgress = uniform(0)

      const strength = 0.01
      const tDepthMap = texture(depthMap)
      const tMap = texture(
        rawMap,
        uv().add(tDepthMap.r.mul(uPointer).mul(strength))
      )

      // Halftone dots
      const tUv = vec2(uv().x, uv().y)
      const tiling = vec2(120.0)
      const tiledUv = mod(tUv.mul(tiling), 2.0).sub(1.0)
      const brightness = mx_cell_noise_float(tUv.mul(tiling).div(2))
      const dist = float(tiledUv.length())
      const dot = float(smoothstep(0.5, 0.49, dist)).mul(brightness)

      const depth = tDepthMap.r
      const flow = oneMinus(smoothstep(0, 0.06, abs(depth.sub(uProgress))))
      // Golden-orange halftone (HDR)
      const mask = dot.mul(flow).mul(vec3(10.0, 6.0, 0.5))
      const withHalftone = blendScreen(tMap, mask)

      // Bloom approximation — warm orange glow
      const glowFlow = oneMinus(
        smoothstep(0, 0.15, abs(depth.sub(uProgress)))
      )
      const bloomApprox = vec3(1.0, 0.5, 0.05).mul(glowFlow).mul(0.18)

      const final = add(withHalftone, bloomApprox)

      const material = new THREE.MeshBasicNodeMaterial({ colorNode: final })
      const geometry = new THREE.PlaneGeometry(2, 2)
      const mesh = new THREE.Mesh(geometry, material as any)
      scene.add(mesh)

      // Pointer tracking (scoped to container)
      const onPointerMove = (e: PointerEvent) => {
        const rect = el.getBoundingClientRect()
        uPointer.value.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
        uPointer.value.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
      }
      window.addEventListener('pointermove', onPointerMove)

      // Resize handling
      const ro = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect
          if (width > 0 && height > 0) {
            renderer.setSize(width, height)
          }
        }
      })
      ro.observe(el)

      // Animation loop — renderer-native, no R3F reconciler
      const clock = new THREE.Clock()
      renderer.setAnimationLoop(() => {
        const elapsed = clock.getElapsedTime()
        uProgress.value = sweepProgress(elapsed)
        renderer.render(scene, camera)
      })

      cleanup = () => {
        window.removeEventListener('pointermove', onPointerMove)
        ro.disconnect()
        renderer.setAnimationLoop(null)
        renderer.domElement.remove()
        renderer.dispose()
        geometry.dispose()
        material.dispose()
        rawMap.dispose()
        depthMap.dispose()
      }
    }

    init()

    return () => {
      disposed = true
      cleanup?.()
    }
  }, [])

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
}

export default HeroFuturistic
