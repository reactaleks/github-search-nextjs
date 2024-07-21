import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

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
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-blue" ><Providers>{children}</Providers>  </body>
    </html>
  );
}
