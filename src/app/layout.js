import "./globals.css";

export const metadata = {
  title: "GGIGH",
  description:
    "This site is for players who wants to know about and plans for the business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
