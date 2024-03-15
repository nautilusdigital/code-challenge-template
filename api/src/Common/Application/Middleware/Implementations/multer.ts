/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
import { RequestHandler } from 'express';
import { extension } from 'mime-types';
import multer from 'multer';
import { FileUploadError } from '../../Errors';

export const multerMiddleware: RequestHandler = (req, res, next) => {
  const upload = multer().array('attachment');
  upload(req, res, (error) => {
    if (error !== undefined) {
      return res.status(500).json({ ...(new FileUploadError(error.message)) });
    }

    if (req.files !== undefined && Array.isArray(req.files)) {
      req.locals = {
        ...req.locals,
        files: req.files.map((file) => ({
          buffer: file.buffer,
          mimetype: file.mimetype,
          extension: extension(file.mimetype),
        })),
      };
    }

    next();
  });
};
