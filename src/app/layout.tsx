import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BD-tickets | Bus Ticket Booking",
  description:
    "bdtickets is the best online ticketing platform for buying tickets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Provider store={store}> */}
          <Header />
          {children}
        {/* </Provider> */}
      </body>
    </html>
  );
}
