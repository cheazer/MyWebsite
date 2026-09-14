import Background from "@/components/Background";
import Hero from "@/components/Hero";
import Ledger from "@/components/Ledger";
import Work from "@/components/Work";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Ledger />
      <Work />
      <Background />
    </main>
  );
}
