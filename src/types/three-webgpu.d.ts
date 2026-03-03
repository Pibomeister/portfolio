/* eslint-disable @typescript-eslint/no-explicit-any */

declare module 'three/webgpu' {
  export * from 'three'
  export class WebGPURenderer {
    constructor(params?: Record<string, any>)
    init(): Promise<void>
    render(scene: any, camera: any): void
    setSize(width: number, height: number): void
    setPixelRatio(ratio: number): void
    setAnimationLoop(callback: ((time: number) => void) | null): void
    dispose(): void
    toneMapping: any
    domElement: HTMLCanvasElement
  }
  export class MeshBasicNodeMaterial {
    constructor(params?: Record<string, any>)
    transparent: boolean
    opacity: number
    dispose(): void
  }
}

declare module 'three/tsl' {
  type TSLNode = {
    [key: string]: any
    add(b: any): TSLNode
    sub(b: any): TSLNode
    mul(b: any): TSLNode
    div(b: any): TSLNode
    length(): TSLNode
    r: TSLNode
    x: TSLNode
    y: TSLNode
    value: any
  }

  export function abs(a: any): TSLNode
  export function add(a: any, b: any): TSLNode
  export function blendScreen(a: any, b: any): TSLNode
  export function float(a: any): TSLNode
  export function mod(a: any, b: any): TSLNode
  export function mul(a: any, b: any): TSLNode
  export function mx_cell_noise_float(a: any): TSLNode
  export function oneMinus(a: any): TSLNode
  export function smoothstep(a: any, b: any, c: any): TSLNode
  export function texture(map: any, uv?: any): TSLNode
  export function uniform(value: any): TSLNode
  export function uv(): TSLNode
  export function vec2(x: any, y?: any): TSLNode
  export function vec3(x: any, y?: any, z?: any): TSLNode
}
