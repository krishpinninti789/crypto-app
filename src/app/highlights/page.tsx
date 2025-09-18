import React from "react";
import TrendingCoins from "./components/TrendingCoins";
import TopGainers from "./components/TopGainers";
import TopLosers from "./components/TopLosers";
import NewCoins from "./components/NewCoins";

const Highlights = () => {
  return (
    <main className="px-4 md:px-8 lg:px-10 py-6 space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">Crypto Highlights</h1>
        <p className="text-sm text-muted-foreground">
          Discover interesting cryptocurrencies based on market activity.
        </p>
      </div>

      <div>
        <h1 className="text-2xl font-semibold">Pro version is required</h1>
        <p className="text-sm text-muted-foreground">
          Pro version is required to access this page.
        </p>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <TrendingCoins />
        <TopGainers />
        <TopLosers />
        <NewCoins />
      </div> */}
    </main>
  );
};

export default Highlights;
