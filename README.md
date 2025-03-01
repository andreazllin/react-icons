# react-icons

This is an example of how I would implement icons using `React` and `Vite.js`.

## How does this work?

The process used in this example is composed by a couple simple steps.

1. Optimization of icons
   - The icons are optimized using `svgo`
   - [`svgo.config.cjs`](./config/svgo.config.cjs)
   - `icons:optimize` from [package.json](./package.json)
   - Run script in [vite.config.ts](./vite.config.ts)
2. Creation of spritesheet from optimized icons
   - The icons are put into a spritesheet using `vite-plugin-icons-spritesheet` in in [vite.config.ts](./vite.config.ts)
     - This generates the spritesheet and the [icon.d.ts](./src/types/icon.d.ts) types
3. Usage of spritesheet
   - Use the spritesheet with the [Icon component](./src/components/icon/index.tsx)
     - This allows us to pass any props to the `svg` element of the icon
     - Also to have only one file import for all the icons
     - Everything should be typesafe

## Usage example

```tsx
<Icon name="<icon_name>" />
```

### Notes

The icons used as example in this repository are from [Tabler Icons](https://tabler.io/icons).
