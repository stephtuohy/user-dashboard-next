import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "User dashboard",
  description: "User list with detailed profile and posts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between w-full p-6 md:p-24">
          {children}
        </main>
      </body>
    </html>
  );
}
