import { CryptocurrencyTable } from "./components/CoinsTable";
import { Header } from "./components/Header";
import { Navigation } from "./components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="container mx-auto px-4 py-6">
        <CryptocurrencyTable />
      </main>
    </div>
  );
}
