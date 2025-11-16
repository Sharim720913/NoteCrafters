// app/layout.tsx
import "./globals.css";
import Header from "../Components/Header";
import { Inter, Poppins } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "NoteCraft",
  description: "Craft smarter notes with NoteCraft.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
