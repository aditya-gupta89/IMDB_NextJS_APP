import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {ThemeProvider as NextThemesProvider} from "next-themes";

import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMDb App",
  description: "This is a movie database rating ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextThemesProvider attribute="class" defaultTheme="dark">

        <Header/>
        <Navbar/>
        {children}
        </NextThemesProvider>
        </body>

    </html>
  );
}
