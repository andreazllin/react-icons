import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { run } from 'vite-plugin-run'
import { iconsSpritesheet } from "vite-plugin-icons-spritesheet"

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
    iconsSpritesheet({
      inputDir: "assets/icons/optimized",
      outputDir: "src/components/icon",
      withTypes: true,
      typesOutputFile: "src/types/icon.d.ts",
      fileName: "spritesheet.svg",
      iconNameTransformer: (name) => {
        return name.normalize()
          .split(/[^0-9a-zA-Z]/g)
          .map((part) => part.toLowerCase()).join("-")
      }
    }),
    run([
      {
        name: "Optimize colored icons SVGs",
        run: ["npm", "run", "colored:optimize"],
        pattern: [
          "assets/colored/*.svg",
          "config/colored-svgo.config.cjs"
        ]
      }
    ]),
    iconsSpritesheet({
      inputDir: "assets/colored/optimized",
      outputDir: "src/components/colored-icon",
      withTypes: true,
      typesOutputFile: "src/types/colored-icon.d.ts",
      fileName: "spritesheet.svg",
      iconNameTransformer: (name) => {
        return name.normalize()
          .split(/[^0-9a-zA-Z]/g)
          .map((part) => part.toLowerCase()).join("-")
      }
    }),
  ],
})
