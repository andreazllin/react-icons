import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { iconsSpritesheet } from "vite-plugin-icons-spritesheet"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    iconsSpritesheet({
      inputDir: "assets/icons/optimized",
      outputDir: "src/components/icon",
      withTypes: true,
      typesOutputFile: "src/types/icon.ts",
      fileName: "spritesheet.svg",
      iconNameTransformer: (name) => {
        return name.normalize()
          .split(/[^0-9a-zA-Z]/g)
          .map((part) => part.toLowerCase()).join("-")
      }
    }),
    iconsSpritesheet({
      inputDir: "assets/colored/optimized",
      outputDir: "src/components/colored-icon",
      withTypes: true,
      typesOutputFile: "src/types/colored-icon.ts",
      fileName: "spritesheet.svg",
      iconNameTransformer: (name) => {
        return name.normalize().toLowerCase()
      }
    }),
    iconsSpritesheet({
      inputDir: "assets/duotone/optimized",
      outputDir: "src/components/duotone-icon",
      withTypes: true,
      typesOutputFile: "src/types/duotone-icon.ts",
      fileName: "spritesheet.svg",
      iconNameTransformer: (name) => {
        return name.normalize()
          .split(/[^0-9a-zA-Z]/g)
          .map((part) => part.toLowerCase()).join("-")
      }
    }),
  ],
})
