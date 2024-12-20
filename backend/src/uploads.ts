
import multer, { StorageEngine } from 'multer';
import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const storage: StorageEngine = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb: (error: any, destination: string) => void) => {
        const uploadPath = './uploads';

        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true }); 
        }

        cb(null, uploadPath); // Set the destination to 'uploads'
    },
    filename: (req: Request, file: Express.Multer.File, cb: (error: any, filename: string) => void) => {
        // Creating a unique file name by prepending the current timestamp
        cb(null, Date.now() + '-' + file.originalname);
    },
});

// Initialize multer with the storage configuration
export const upload = multer({ storage });

