import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import type { ZodSchema } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      // Validate the value against the provided Zod schema
      const parsedValue = this.schema.parse(value);
      return parsedValue;
    } catch (error: any) {
      // If validation fails, throw a BadRequestException
      throw new BadRequestException('Validation failed', error.errors);
    }
  }
}
