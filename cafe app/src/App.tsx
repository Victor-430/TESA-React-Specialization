import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MenuCard from "./components/Menucard";
import OrderSummary from "./components/OrderSummary";
import { MENU } from "./data";
import type { CheckoutDetails, MenuItem, OrderLine, OrderStatus } from "./types";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [order, setOrder] = useState<OrderLine[]>([]);
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [showSummary, setShowSummary] = useState(true);
  const [status, setStatus] = useState<OrderStatus>("idle");
  const [details, setDetails] = useState<CheckoutDetails>({
    name: "",
    size: "Medium",
    notes: "",
  });

  const orderCount = order.reduce((sum:number, line:OrderLine) => sum + line.qty, 0);

  const filteredMenu = MENU.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleAdd(item: MenuItem): void {
    setOrder((prev: OrderLine[]) => {
      const existing = prev.find((l) => l.id === item.id);
      if (existing) {
        return prev.map((l) => (l.id === item.id ? { ...l, qty: l.qty + 1 } : l));
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, qty: 1 }];
    });
  }

  function handleQtyChange(id: number, nextQty: number): void {
    setOrder((prev: OrderLine[]) => prev.map((l) => (l.id === id ? { ...l, qty: nextQty } : l)));
  }

  function handleRemove(id: number): void {
    setOrder((prev:OrderLine[]) => prev.filter((l) => l.id !== id));
  }

  function handleSubmitOrder(): void {
    setStatus("loading");
    window.setTimeout(() => {
      const succeeded = Math.random() > 0.35;
      setStatus(succeeded ? "success" : "error");
      if (succeeded) {
        setOrder([]);
      }
    }, 2000);
  }

  useEffect(() => {

    function handleWindowKeyDown(e: KeyboardEvent): void {
      if (e.key === "Escape") {
        setShowSummary(false);
      }
    }

    // it differs from jsx onkeydown in that it is a native event listener, provided by the browser. 
    // while jsx onKeyDown is a cross browser wrapper created by react to ensure consistency in browser.
    window.addEventListener("keydown", handleWindowKeyDown);
    return () => window.removeEventListener("keydown", handleWindowKeyDown);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar
        isLoggedIn={isLoggedIn}
        name="Victor"
        orderCount={orderCount}
        onLoginToggle={() => setIsLoggedIn((v:boolean) => !v)}
      />

      <main className="mx-auto max-w-6xl px-5 py-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="font-display text-2xl text-cream">Tonight's menu</h1>
            <p className="mt-1 text-sm text-muted">Four pours, no last call.</p>
          </div>
          <button
            type="button"
            onClick={() => setShowSummary((v:boolean) => !v)}
            className="btn-glass"
          >
            {showSummary ? "Hide order summary" : "Show order summary"}
          </button>
        </div>

        <div className={`grid grid-cols-1 gap-6 ${showSummary ? "lg:grid-cols-[1fr_320px]" : ""}`}>
          <div>
            <div className="mb-4 max-w-sm">
              <SearchBar value={search} onChange={setSearch} />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {filteredMenu.length === 0 ? (
                <p className="col-span-full text-sm text-muted">No drinks match “{search}”.</p>
              ) : (
                filteredMenu.map((item: MenuItem) => (
                  <MenuCard
                    key={item.id}
                    item={item}
                    isLoggedIn={isLoggedIn}
                    isSelected={selectedId === item.id}
                    onSelect={setSelectedId}
                    onAdd={handleAdd}
                  />
                ))
              )}
            </div>
          </div>

          {showSummary ? (
            <aside className="lg:sticky lg:top-20 lg:h-fit">
              <OrderSummary
                order={order}
                onQtyChange={handleQtyChange}
                onRemove={handleRemove}
                details={details}
                onDetailsChange={setDetails}
                status={status}
                onSubmit={handleSubmitOrder}
              />
            </aside>
          ) : null}
        </div>
      </main>
    </div>
  );
}
