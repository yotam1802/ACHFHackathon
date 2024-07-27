import { Bubblegum_Sans } from "next/font/google";
import "./globals.css";

const bubblegumSans = Bubblegum_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "HealthBridge",
  description: "Bridging the gap between patients and healthcare providers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bubblegumSans.className}>{children}</body>
    </html>
  );
}
