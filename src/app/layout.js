import "./globals.css";

export const metadata = {
  title: "Karthik | Full Stack Developer",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}