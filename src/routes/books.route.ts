import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    res.status(200).json([{ id: 1, title: 'Book 2'}]);
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});

export default router;