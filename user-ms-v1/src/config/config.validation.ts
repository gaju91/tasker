import { plainToClass } from 'class-transformer';
import { IsNumber, IsString, validateSync } from 'class-validator';

export class EnvironmentVariables {
  @IsString()
  HOST: string;

  @IsNumber()
  PORT: number;

  @IsString()
  MONGO_URI: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, { skipMissingProperties: false });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
