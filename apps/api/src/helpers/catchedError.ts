import type { Response } from 'express';

import { Errors } from '@hey/data/errors';
import logger from '@hey/helpers/logger';

const catchedError = (res: Response, error: any) => {
  logger.error(error);

  return res.status(500).json({
    error: Errors.SomethingWentWrong,
    message: error.message,
    success: false
  });
};

export default catchedError;
