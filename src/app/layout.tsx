import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/layout/Navbar"
import { Toaster } from "sonner"
import Footer from "@/components/layout/Footer"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MJ Restaurant",
  description: "For the love of delicious food",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Toaster />
        <Footer/>
      </body>
    </html>
  )
}
