import { z } from 'zod';

export const zodErrorMap: z.ZodErrorMap = (issue, ctx) => {
  switch (issue.code) {
    case 'invalid_type':
      if (issue.received === 'undefined') return { message: 'To pole jest wymagane!' };
      break;
  }

  return { message: ctx.defaultError };
};
