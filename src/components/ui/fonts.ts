import { Inter, JetBrains_Mono, Lusitana } from "next/font/google";

//https://tailwindcss.com/docs/font-family Customizing the default font -> --font-sans
export const inter = Inter({ subsets: ["latin"], variable: "--font-sans"});
export const lusitana = Lusitana({ subsets: ["latin"], weight: "400" });
export const jetbrains = JetBrains_Mono({subsets: ["latin"]});