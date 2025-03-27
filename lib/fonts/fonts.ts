import { Pacifico } from "next/font/google";
import localFont from "next/font/local"


export const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
})

export const geist = localFont({
  src: "./geist-font.ttf"
})