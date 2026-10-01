// ✅ PROVIDED: part of the starter. You don't need to change this file, but use it as a reference.
import { Header } from "./components/Header";
import { CartButton } from "./components/CartButton";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-6">
        <CartButton />
      </main>
    </div>
  );
}
