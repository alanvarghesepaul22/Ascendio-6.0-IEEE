import { Inter } from "next/font/google";
import "./globals.css";
import FloatingNavBar from "../components/FloatingNavBar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ascendio 6.0",
  description: "IEEE SSET Ascendio 6.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full flex md:items-center md:justify-center relative overflow-hidden">
          <div className="flex w-full flex-col justify-center items-center">
            <FloatingNavBar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
