import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";

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
    <html lang="en" className={`${font.className}`}>
      <body className="flex flex-col h-full bg-zinc-900 text-zinc-200">
        <Header />
        <main className="h-full flex-1 bg-zinc-800 py-4 px-20">{children}</main>
      </body>
    </html>
  );
}
