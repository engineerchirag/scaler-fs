import { Router } from "express";
import { createBlog, getAllBlogs, getBlogDetail } from "../controllers/blog.controller.js";


const router = Router();

router.get('/', getAllBlogs);
router.post('/', createBlog);
router.get('/:blogId', getBlogDetail);

export default router;
