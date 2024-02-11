import "@styles/globals.css";
import type { Metadata } from "next";
import { PoppinsFont } from "@fonts/fonts";
import { DEFAULT_METADATA } from "@constants/metadata";
import NavBar from "@components/navbar";

export const metadata: Metadata = {
  ...DEFAULT_METADATA,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${PoppinsFont.className} bg-background`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
