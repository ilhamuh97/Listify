import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { StatusCodes } from 'http-status-codes';

import ShoppingItem from '../models/shoppingItem.model';

export const getShoppingItems = async (_: Request, res: Response) => {
  try {
    const items = await ShoppingItem.find();

    res.status(StatusCodes.OK).json(items);
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Server Error' });
  }
};

export const createShoppingItem = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    const newItem = new ShoppingItem({ name });
    const savedItem = await newItem.save();

    res.status(StatusCodes.CREATED).json(savedItem);
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Server Error' });
  }
};

export const updateShoppingItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { bought } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid ID' });
  }

  try {
    const updatedItem = await ShoppingItem.findByIdAndUpdate(
      id,
      { bought },
      { new: true },
    );

    if (!updatedItem) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: 'Item not found' });
    }

    res.status(StatusCodes.OK).json(updatedItem);
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Server Error' });
  }
};

export const deleteShoppingItem = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid ID' });
  }

  try {
    const deletedItem = await ShoppingItem.findOneAndDelete({ _id: id });

    if (!deletedItem) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: 'Item not found' });
    }

    res.status(StatusCodes.OK).json({ message: 'Item has been deleted' });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Server Error' });
  }
};
