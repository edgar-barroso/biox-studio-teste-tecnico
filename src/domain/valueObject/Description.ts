import { ValidationError } from '../error/ValidationError';

export class Description {
  private value: string;

  constructor(value: string) {
    this.value = this.validate(value);
  }

  validate(value: string): string {
    if (!value || value.trim().length === 0) throw new ValidationError('Description must not be empty');
    return value;
  }

  getValue() {
    return this.value;
  }
}
