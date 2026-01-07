import { useState } from "react";

import type { IShoppingItem } from "../../types/shoppingItem";

import ShoppingItemRow from "./ShoppingItemRow/ShoppingItemRow";
import AddShoppingItem from "./AddShoppingItem/AddShoppingItem";
import DeleteConfirmModal from "./DeleteConfirmModal/DeleteShoppingItem";

import useShoppingItemStore, {
  type ShoppingItemState,
} from "../../store/useShoppingItemStore";

const ShoppingItemsList = () => {
  const { shoppingItems, addShoppingItem, toggleBought, deleteShoppingItem } =
    useShoppingItemStore() as ShoppingItemState;

  const [deleteId, setDeleteId] = useState<string | null>(null);

  return (
    <div className="max-w-md mx-auto space-y-3">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-1">Your Shopping List</h2>
        <p className="text-gray-500 text-sm">
          Click on an item to mark it as bought or not bought.
        </p>
      </div>

      {shoppingItems.map((item: IShoppingItem) => (
        <ShoppingItemRow
          key={item._id}
          item={item}
          onToggle={() => toggleBought(item._id, !item.bought)}
          onDelete={() => setDeleteId(item._id)}
        />
      ))}

      <AddShoppingItem onAdd={addShoppingItem} />

      <DeleteConfirmModal
        open={deleteId !== null}
        onConfirm={() => {
          if (!deleteId) return;
          deleteShoppingItem(deleteId);
          setDeleteId(null);
        }}
        onCancel={() => setDeleteId(null)}
      />
    </div>
  );
};

export default ShoppingItemsList;
