import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/Header/HeaderComponent";


const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Movies",
    description: "",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
        <body>
            <HeaderComponent/>
            {children}
        </body>
        </html>
    );
}
