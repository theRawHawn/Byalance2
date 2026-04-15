import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
