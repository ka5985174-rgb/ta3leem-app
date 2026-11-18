import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
    weight: ["300", "400", "500", "700", "800"],
      variable: "--font-tajawal",
      });

      export const metadata: Metadata = {
        title: "المنصة التعليمية",
          description: "منصة تعليمية احترافية",
          };

          export default function RootLayout({
            children,
            }: Readonly<{
              children: React.ReactNode;
              }>) {
                return (
                    <html lang="ar" dir="rtl">
                          <body className={`${tajawal.variable} antialiased`}>
                                  {children}
                                        </body>
                                            </html>
                                              );
                                              }