import "./globals.css";

export const metadata = {
  title: "Bearshop - Deine Geschichte mit Stil",
  description: "Textildruck & Merchandise Österreich",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}