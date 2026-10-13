import OrderPage from "./bugs/OrderSummary";
import ProductSearch from "./bugs/ProductSearch";
import ScoreBoard from "./bugs/ScoreBoard";
import SignupForm from "./bugs/SignupForm";
import ProfilePage from "./bugs/UserProfile";

function App() {
  return <>
  <ScoreBoard />
  <ProfilePage />
  <SignupForm />
  <ProductSearch />
  <OrderPage />
  </>;
}

export default App;
