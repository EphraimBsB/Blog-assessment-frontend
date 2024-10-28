import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import MyProfilePic from "./components/MyProfilePic";

export const metadata: Metadata = {
  title: "Ephraim's Akieni Assessment Blog",
  description: "Created by Ephraim Basubi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="dark:bg-slate-800"
      >
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
