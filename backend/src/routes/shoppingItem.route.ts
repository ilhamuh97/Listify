import { Router } from 'express';
import {
  getShoppingItems,
  createShoppingItem,
  updateShoppingItem,
  deleteShoppingItem,
} from '../controllers/shoppingItem.controller';

const router: Router = Router();

router.get('/', getShoppingItems);
router.post('/', createShoppingItem);
router.put('/:id', updateShoppingItem);
router.delete('/:id', deleteShoppingItem);

export default router;
