import express from 'express';
const imgProcessor = express.Router();
import { promises as fsPromises } from 'fs';
import path from 'path';
import sharp from 'sharp';

// Get current directory
const dirname = __dirname;

imgProcessor.get('/images', async (req, res) => {
    const CURRENT_PATH = path.join(dirname, '../../../images', 'full');
    const PROCESSED_PATH = path.join(dirname, '../../../images', 'thumb');

    let filename: string;
    let width: number;
    let height: number;

    if (!req.query.filename) {
        return res.status(400).send('Can not proceed without filename');
    } else {
        filename = req.query.filename as string;
    }

    if (req.query.width && Number(req.query.width) <= 0) {
        return res.status(400).send(`invalid width: ${req.query.width}`);
    } else {
        width = Number(req.query.width) as number;
    }

    if (req.query.height && Number(req.query.height) <= 0) {
        return res.status(400).send(`invalid height: ${req.query.height}`);
    } else {
        height = Number(req.query.height) as number;
    }

    async function exists(filePath: string) {
        try {
            await fsPromises.access(filePath);
            return true;
        } catch (e) {
            return false;
        }
    }

    const isExists = await exists(`${PROCESSED_PATH}/${filename}_${width}x${height}.jpg`);

    if (!isExists) {
        try {
            await sharp(`${CURRENT_PATH}/${filename}.jpg`)
                .resize(width, height)
                .toFile(`${PROCESSED_PATH}/${filename}_${width}x${height}.jpg`);
        } catch (e) {
            res.status(400).send('Error in resizing process');
        }
    }

    res.status(200).send('Image processed successfully');
});

export default imgProcessor;
