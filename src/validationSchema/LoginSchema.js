import { check } from 'express-validator';

export const LoginSchema = [
    check('username', 'Username is required').exists()
        .trim().isLength({ min: 6, max: 32 }),

    check('password', 'Password is required')
        .exists().isLength({ min: 6, max: 100 }).trim(),

]
