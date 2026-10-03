import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        notFound: '404.html',
        projectIndex: 'projects.html',
        fourBar: 'projects/four-bar-ev-charging-arm.html',
        hexapod: 'projects/hexapod.html',
        sustainableChair: 'projects/sustainable-chair.html',
        topologyOptimization: 'projects/topology-optimization.html',
        bladedDiskOptimization: 'projects/bladed-disk-optimization.html',
        cncBracket: 'projects/cnc-bracket.html',
        arborPress: 'projects/arbor-press.html',
        roboticArm: 'projects/robotic-arm.html',
        physicsSurrogate: 'projects/physics-surrogate-optimization.html',
        progressRail: 'experience/progress-rail.html',
        deepCoat: 'experience/deep-coat.html',
        fsae: 'experience/fsae.html',
        tripleThreatServices: 'experience/triple-threat-services.html',
      },
    },
  },
})
