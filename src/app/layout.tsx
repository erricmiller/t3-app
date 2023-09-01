import AuthProvider from "@/Providers/AuthProvider";
import TRPCProvider from "@/Providers/TRPCProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "T3 APP",
  description: "Created by Fahad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <div className="w-full h-10 bg-blue-600 flex items-center justify-around">
            <Link href={"/"} className="">
              Home
            </Link>
            <br />
            <Link href={"/api/auth/signin"}>Sign In</Link>
            <br />
            <Link href={"/api/auth/signout"}>Sign Out</Link>
            <br />
            <Link href={"/server"}>Server</Link>
            <br />
            <Link href={"/client"}>Client</Link>
            <br />
            <Link href={"/extras"}>Extras</Link>
            <br />
          </div>
          <TRPCProvider>{children}</TRPCProvider>
        </body>
      </AuthProvider>
    </html>
  );
}
