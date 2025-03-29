import Header from "@/components/shared/header/header";
import { Footer } from "@/components/shared/footer/footer";
import MegaMenu from "@/components/shared/header/mega-menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header />
      <MegaMenu />
      <main className="flex-1 wrapper p-5">{children}</main>
      <Footer />
    </div>
  );
}
