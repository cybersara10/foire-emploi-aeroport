"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Emploi from "@/components/Emploi";
import { useState } from "react";

import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    const [currentPage, setCurrentPage] = useState("Emploi");

    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen">
                <Header changePage={setCurrentPage} />
                <main className="flex-1">
                    {currentPage === "Emploi" ? (
                        <Emploi />
                    ) : (
                        <div>Page Not Found</div>
                    )}
                </main>
                <Footer />
            </body>
        </html>
    );
}
