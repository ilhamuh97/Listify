import { create } from "zustand";
import { toast } from "react-toastify";

import { axiosInstance } from "../lib/axios";
import type { IShoppingItem } from "../types/shoppingItem";
import { handleAxiosError } from "../helpers/handleAxiosError";

export interface ShoppingItemState {
  shoppingItems: IShoppingItem[];
  isShoppingItemsLoading: boolean;

  getShoppingItems: () => Promise<void>;
  addShoppingItem: (name: string) => Promise<void>;
  toggleBought: (_id: string, bought: boolean) => Promise<void>;
  deleteShoppingItem: (_id: string) => Promise<void>;
}

const useShoppingItemStore = create<ShoppingItemState>()((set, get) => ({
  shoppingItems: [],
  isShoppingItemsLoading: false,

  getShoppingItems: async () => {
    set({ isShoppingItemsLoading: true });
    try {
      const response = await axiosInstance.get("/items");
      set({ shoppingItems: response.data });
    } catch (error) {
      handleAxiosError(error, "Failed to load items");
    } finally {
      set({ isShoppingItemsLoading: false });
    }
  },

  addShoppingItem: async (name) => {
    try {
      const response = await axiosInstance.post("/items", { name });
      set({
        shoppingItems: [...get().shoppingItems, response.data],
      });
      toast.success(`Added "${name}"`);
    } catch (error) {
      handleAxiosError(error, "Failed to add item");
    }
  },

  toggleBought: async (_id: string, bought: boolean) => {
    try {
      const response = await axiosInstance.put(`/items/${_id}`, { bought });
      set({
        shoppingItems: get().shoppingItems.map((item) =>
          item._id === _id ? response.data : item
        ),
      });
      toast.info(
        bought
          ? `"${response.data.name}" bought`
          : `"${response.data.name}" undone`
      );
    } catch (error) {
      handleAxiosError(error, "Failed to update item");
    }
  },

  deleteShoppingItem: async (_id) => {
    try {
      const itemToDelete = get().shoppingItems.find((i) => i._id === _id);
      await axiosInstance.delete(`/items/${_id}`);
      set({
        shoppingItems: get().shoppingItems.filter((item) => item._id !== _id),
      });
      toast.warn(`Deleted "${itemToDelete?.name}"`);
    } catch (error) {
      handleAxiosError(error, "Failed to delete item");
    }
  },
}));

export default useShoppingItemStore;
