import * as Yup from 'yup';

import { YupValidator } from '../Implementations';

/**
 * Factory function for creating a YupValidator instance based on a Yup object schema.
 *
 * @param schema - The Yup object schema.
 * @returns The YupValidator instance.
 */
export const yupValidatorFactory = (schema: Yup.ObjectSchema<Yup.Maybe<Yup.AnyObject>>) => new YupValidator(schema);
