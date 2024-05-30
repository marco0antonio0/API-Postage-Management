// controller
import express, { Request, Response } from 'express';
import { postService } from './post.service';

// Cria um novo roteador
const router = express.Router();

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Retrieve a list of posts
 *     description: Retrieve a list of all posts.
 *     responses:
 *       200:
 *         description: A list of posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/', async (req: Request, res: Response) => {
    const posts = await postService.getAllPosts();
    res.json(posts);
});

/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Retrieve a single post by ID
 *     description: Retrieve a single post by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single post
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get('/:id', async (req: Request, res: Response) => {
    const post = await postService.getPostById(req.params.id);
    res.json(post);
});

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Create a new post
 *     description: Create a new post with title, type, and text.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - type
 *               - text
 *             properties:
 *               title:
 *                 type: string
 *               type:
 *                 type: string
 *               text:
 *                 type: string
 *     responses:
 *       201:
 *         description: The created post
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.post('/', async (req: Request, res: Response) => {
    const newPost = await postService.createPost(req.body);
    res.json(newPost);
});

/**
 * @swagger
 * /api/posts/{id}:
 *   put:
 *     summary: Update an existing post by ID
 *     description: Update an existing post by ID with new title, type, and text.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - type
 *               - text
 *             properties:
 *               title:
 *                 type: string
 *               type:
 *                 type: string
 *               text:
 *                 type: string
 *     responses:
 *       200:
 *         description: The updated post
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.put('/:id', async (req: Request, res: Response) => {
    const updatedPost = await postService.updatePost(req.params.id, req.body);
    res.json(updatedPost);
});

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Delete a post by ID
 *     description: Delete a single post by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: No Content
 */
router.delete('/:id', async (req: Request, res: Response) => {
    await postService.deletePost(req.params.id);
    res.sendStatus(204);
});

export const postController = router;
