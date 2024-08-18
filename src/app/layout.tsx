"use client";

import { AppProvider } from "../context";

import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AppProvider>
            <html lang="pt-br" suppressHydrationWarning={true}>
                <head>
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="favicon.png"
                    ></link>
                </head>
                <body suppressHydrationWarning={true}>{children}</body>
            </html>
        </AppProvider>
    );
}
