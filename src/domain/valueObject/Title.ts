import { ValidationError } from '../error/ValidationError';

export class Title {
  private value: string;

  constructor(value: string) {
    this.value = this.validate(value);
  }

  validate(value: string): string {
    if (!value || value.trim().length === 0) throw new ValidationError('Title must not be empty');
    return value;
  }

  getValue() {
    return this.value;
  }
}
