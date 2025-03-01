import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { run } from 'vite-plugin-run'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    run([
      {
        name: "Optimize icons SVGs",
        run: ["npm", "run", "icons:optimize"],
        pattern: [
          "assets/icons/*.svg",
          "config/svgo.config.cjs"
        ]
      }
    ]),
  ],
})
