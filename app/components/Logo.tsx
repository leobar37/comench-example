import {getConfig, type LogoProps} from '@comenchi/admin'
import {cva} from 'class-variance-authority'
import {FC} from 'react'

const logoVariants = cva('flex items-center ', {
  variants: {
    size: {
      xs: 'w-[6rem] md:w-[8rem]',
      sm: 'w-[6rem] md:w-[8rem]',
    },
  },
  defaultVariants: {
    size: 'xs',
  },
})

const Logo: FC<LogoProps> = ({size}) => {
  return (
    <div
      className={logoVariants({
        size: size,
      })}
    >
      <svg
        viewBox="0 0 144 29"
        className="w-full"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          fill="#1A1A1A"
          d="M.78 28.676V5.711H0L.575.324h11.741l-.328 5.387H6.363v6.075h5.05l-.328 5.387H6.363v11.503H.78ZM14.732 28.716V5.752h-.78l.575-5.386h5.789v22.924h7.841l-.328 5.387h-7.513v.04h-5.584ZM29.967 28.676V5.711h-.78l.575-5.387h11.742l-.329 5.387h-5.624v6.075h5.05l-.329 5.387h-4.721v6.116h5.953l-.329 5.387H29.967ZM43.14 28.676l3.9-14.176L43.14.324h5.542l2.052 9.6 2.012-9.6h5.543l-3.9 14.176 3.9 14.176h-5.543l-2.012-9.6-2.052 9.6h-5.543Z"
        ></path>
        <path
          fill="#FFB703"
          d="M66.96 19.765v3.646c0 .135.069.202.205.202h1.19c.138 0 .206-.067.206-.202l.041-5.387-4.639-1.985c-1.04-.459-1.738-.932-2.094-1.418-.328-.486-.492-1.228-.492-2.227V5.792c0-2.08.451-3.564 1.354-4.455C63.635.446 65.1 0 67.124 0h1.725c1.915.081 3.284.58 4.105 1.499.821.89 1.232 2.322 1.232 4.293v5.063l-5.584-.608V5.59c0-.135-.068-.202-.205-.202h-1.232c-.137 0-.205.067-.205.202v5.954l4.64 1.985c1.04.432 1.724.904 2.052 1.417.356.487.534 1.23.534 2.228v6.035c0 1.971-.41 3.416-1.232 4.334-.821.891-2.19 1.377-4.105 1.458h-1.643c-2.08 0-3.571-.445-4.475-1.337-.903-.918-1.354-2.403-1.354-4.455v-3.443h5.583ZM76.394 28.676V5.711h-.78L76.19.324h3.86l4.063-.04 1.971 15.31L88.095.324h7.718v28.352H90.23v-16.93l-2.176 12.88h-3.9l-2.176-12.88v16.93h-5.584ZM97.465 28.676l3.407-22.965h-.862l.575-5.387h9.565l4.229 28.352h-5.542l-.616-4.05h-4.598l-.616 4.05h-5.542Zm6.938-9.437h3.038l-1.519-10.126-1.519 10.126ZM116.602 28.676V5.711h-.78l.575-5.387h7.513c2.107 0 3.613.46 4.516 1.377.93.891 1.396 2.363 1.396 4.415v9.235c0 2.079-.452 3.564-1.355 4.455l2.545 8.87h-5.583l-2.135-7.534h-1.108v7.534h-5.584Zm7.431-22.965h-1.847v10.045h1.847c.137 0 .205-.068.205-.203v-9.64c0-.135-.068-.202-.205-.202ZM134.64 28.676V5.711h-3.819V.324H144v5.387h-3.777v22.965h-5.583Z"
        ></path>
      </svg>
    </div>
  )
}

getConfig().components.addComponent('logo', {
  component: Logo,
})
