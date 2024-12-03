// app/layout.js
import { CartProvider } from "./(pages)/cartContext/page";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "HOME GOING SERVICE",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-200">
        <CartProvider>
          {/* Header */}
          <div className="fixed top-0 bg-white w-full z-50 shadow-md">
            <Header />
          </div>
          {/* Main Content */}
          <div className="pt-20 p-2">{children}</div>
          {/* Footer */}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
