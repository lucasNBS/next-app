import "src/styles/globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Header from "src/components/organisms/Header/Header";
import Footer from "src/components/molecules/Footer/Footer";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next /App",
  description: "Next application with app router",
};

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main-container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
