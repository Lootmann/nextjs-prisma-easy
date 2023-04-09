import { Header } from "./components/Header";
import { Nunito } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Nextjs 13 test",
  description: "This is a test repository",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body
        className={
          font.className +
          `flex flex-col min-h-screen bg-zinc-900 text-zinc-200`
        }
      >
        <Header />

        {/* Header height and border px */}
        <main className="h-[calc(100vh-4rem-1px)] bg-zinc-800 py-4 px-20">
          {children}
        </main>
      </body>
    </html>
  );
}
