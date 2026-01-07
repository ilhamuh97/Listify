import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

import ShoppingItemsList from "./components/ShoppingItemList/ShoppingItemsList";
import MainLayout from "./components/layout/MainLayout";

import useShoppingItemStore, {
  type ShoppingItemState,
} from "./store/useShoppingItemStore";
import { useThemeStore } from "./store/useThemeStore";

function App() {
  const { getShoppingItems } = useShoppingItemStore() as ShoppingItemState;

  const { theme } = useThemeStore();

  useEffect(() => {
    getShoppingItems();
  }, [getShoppingItems]);

  return (
    <div data-theme={theme}>
      <MainLayout>
        <ShoppingItemsList />
        <ToastContainer />
      </MainLayout>
    </div>
  );
}

export default App;
