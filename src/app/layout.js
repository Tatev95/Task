import { NavBar } from "@/components";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='main_layout'>
          <Header />
        </div>
        <NavBar />
        <div className='main_layout'>
          {children}
        </div>
      </body>
    </html>
  );
}
