import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Github User Searc App - Front End Mentor",
  description: "This project is created as part of front end mentor exercise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
