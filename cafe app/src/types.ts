export type MenuItem = {
  id: number;
  name: string;
  price: number;
  stock: number; // how many are left
};

export type OrderLine = {
  id: number;
  name: string;
  price: number;
  qty: number;
};

export type OrderStatus = "idle" | "loading" | "success" | "error";

export type CheckoutDetails = {
  name: string;
  size: "Small" | "Medium" | "Large";
  notes: string;
};


export type NavbarProps = {
  isLoggedIn: boolean;
  name: string;
  orderCount: number;
  onLoginToggle: () => void;
};

export type MenuCardProps = {
  item: MenuItem;
  isLoggedIn: boolean;
  isSelected: boolean;
  onSelect: (id: number) => void;
  onAdd: (item: MenuItem) => void;
};


export type CheckoutFormProps = {
  details: CheckoutDetails;
  onDetailsChange: (details: CheckoutDetails) => void;
  status: OrderStatus;
  disabled: boolean;
  onSubmit: () => void;
};

export type OrderSummaryProps = {
  order: OrderLine[];
  onQtyChange: (id: number, nextQty: number) => void;
  onRemove: (id: number) => void;
  details: CheckoutDetails;
  onDetailsChange: (details: CheckoutDetails) => void;
  status: OrderStatus;
  onSubmit: () => void;
};


export type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export type StockLabel = {
  text: string;
  tone: "danger" | "warn" | "success";
};