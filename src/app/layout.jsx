import localFont from "next/font/local";
import "./globals.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const InterRegular = localFont({
  src: "./fonts/Inter-Regular.woff2",
  variable: "--font-inter-regular",
  weight: "400",
});
const InterThinBETA = localFont({
  src: "./fonts/Inter-ThinBETA.woff2",
  variable: "--font-inter-thin",
  weight: "100",
});
const InterExtraLightBETA = localFont({
  src: "./fonts/Inter-ExtraLightBETA.woff2",
  variable: "--font-inter-extra-light",
  weight: "200",
});
const InterLightBETA = localFont({
  src: "./fonts/Inter-LightBETA.woff2",
  variable: "--font-inter-light",
  weight: "300",
});
const InterMedium = localFont({
  src: "./fonts/Inter-Medium.woff2",
  variable: "--font-inter-medium",
  weight: "500",
});
const InterSemiBold = localFont({
  src: "./fonts/Inter-SemiBold.woff2",
  variable: "--font-inter-semibold",
  weight: "600",
});
const InterBold = localFont({
  src: "./fonts/Inter-Bold.woff2",
  variable: "--font-inter-bold",
  weight: "700",
});
const InterExtraBold = localFont({
  src: "./fonts/Inter-ExtraBold.woff2",
  variable: "--font-inter-extrabold",
  weight: "800",
});
const InterBlack = localFont({
  src: "./fonts/Inter-Black.woff2",
  variable: "--font-inter-black",
  weight: "900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${InterRegular.variable} ${InterThinBETA.variable} ${InterExtraLightBETA.variable} ${InterLightBETA.variable} ${InterMedium.variable} ${InterSemiBold.variable} ${InterBold.variable} ${InterExtraBold.variable} ${InterBlack.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        
      </body>
    </html>
  );
}
