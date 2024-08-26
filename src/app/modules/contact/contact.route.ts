import express from 'express';
import { contact } from './contact.controller';

const router = express.Router();

router.post('/', contact.createContact);

export const contactRoute = router;
