import mongoose from 'mongoose';

export interface IShoppingItem extends mongoose.Document {
  name: string;
  bought: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const shoppingItemSchema = new mongoose.Schema<IShoppingItem>(
  {
    name: { type: String, required: true },
    bought: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const ShoppingItem = mongoose.model<IShoppingItem>(
  'ShoppingItem',
  shoppingItemSchema,
);

export default ShoppingItem;
