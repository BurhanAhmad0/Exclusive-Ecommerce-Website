import localFont from "next/font/local";
import "./globals.css";
import './globalicon.css';

// Importing Other Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Importing Session Wrapper
import SessionWrapper from "@/components/sessionWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = localFont({
  src: [
    {
      path: './fonts/Poppins/Poppins-Regular.ttf',
      weight: '400'
    },
    {
      path: './fonts/Poppins/Poppins-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-poppins'
})

export const metadata = {
  title: "Exclusive | Ecommerce Website",
  description: "Responsive ecommerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins`}
      >
        <SessionWrapper>
          <Navbar />
          {children}
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
