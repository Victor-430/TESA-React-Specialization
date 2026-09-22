import { Toaster as SonnerToaster } from "sonner";

export const Toaster = () => {
  return (
    <SonnerToaster
      position="top-right"
      richColors
      toastOptions={{
        className: "font-sans",
      }}
    />
  );
}


