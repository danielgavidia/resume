import XNavbar from "@/components/XNavbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`antialiased`}>
        <XNavbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
