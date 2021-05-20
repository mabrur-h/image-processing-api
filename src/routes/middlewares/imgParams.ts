import { Request, Response } from "express";

function imgParams(req: Request, res: Response) {
  let imgName: string;
  let imgWidth: number;
  let imgHeight: number;

  if (req.query.filename) {
    imgName = req.query.filename as string;
  } else {
    return res.status(400).send('Please, input the filename!')
  }

  if (req.query.width && req.query.height) {
    imgWidth = Number(req.query.width) as number;
    imgHeight = Number(req.query.height) as number;
  } else {
    return res.status(400).send('Please, input the image sizes!')
  }

  if ((Number(req.query.width) || Number(req.query.height)) <= 0) {
    return res.status(400).send('Invalid size, please try again!')
  }

  return { imgWidth, imgHeight, imgName }
}

export default imgParams;