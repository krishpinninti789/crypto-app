import { CryptocurrencyTable } from "./components/CoinsTable";
import HighlightStats from "./components/HighlightsStats";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HighlightStats />
      <main className="container mx-auto px-4 py-6">
        <CryptocurrencyTable />
      </main>
    </div>
  );
}
