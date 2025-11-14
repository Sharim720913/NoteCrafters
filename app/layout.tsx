import "./globals.css";
import Header from "../Components/Header";
import { Poppins, Inter } from "next/font/google";

// ✅ Importing Google Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const metadata = {
  title: "NoteCrafters",
  description: "Your Notes, Your Power.",
};

// ✅ Root Layout Structure
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
