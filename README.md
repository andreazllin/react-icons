# react-icons

This is an example of how I would implement icons using `React` and `Vite.js`.

> [!NOTE]
> I suggest using this solution with single-color icons (eg. [Tabler Icons](https://tabler.io/icons)) or colored icons that you don't need to change (eg. [Icons8 Flat Color Icons](https://icons8.github.io/flat-color-icons/)).
>
> Why? [Click here.](#notes)

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

If you're using a single spritesheet
```tsx
<Icon name="<icon_name>" />
```

or with multiple

```tsx
<CombinedIcon type="<spritesheet>" name="<icon_name>" />
```



## Notes

> [!CAUTION]
> There is a caveat to this solution, if using a colored icon pack and you need a variant of that (eg. you have a grey [2 tone](./.github/two-tone-icons.gif) "Trash" icon, but you also need a red colored one), I suggest to make another spritesheet for all red variants or, if you don't have that many of these variants, to make a different spritesheet containing all of the modified icons.


> [!TIP]
> Try to group your icons by context, for example, if you are using an icon pack, make a spritesheet out of that and if you are also using some other assets (eg. custom assets that are not from the icon pack) make another one

### Credits

- The icons used as example in this repository are from [tabler/tabler-icons](https://github.com/tabler/tabler-icons).

- The colored icons used as example in this repository are from [icons8/flat-color-icons](https://github.com/icons8/flat-color-icons).

- The example for two-tone-icons is from [dribbble.com/gaddafirusli](https://dribbble.com/shots/3562554-Two-tone-icons)