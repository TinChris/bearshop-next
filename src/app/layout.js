import { Inter, Poppins, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins',
});

const merriweather = Merriweather({ 
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-merriweather',
});

export const metadata = {
  title: "Bearshop - Deine Geschichte mit Stil",
  description: "Textildruck & Merchandise Österreich",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${poppins.variable} ${merriweather.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}