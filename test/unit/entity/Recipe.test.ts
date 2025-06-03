import { Recipe } from '@/domain/entity/Recipe';
import { ValidationError } from '@/domain/error/ValidationError';

describe('Recipe', () => {
  it('Deve ser possivel criar uma receita', () => {
    const input = {
      title: 'Receita de Bolo',
      description: 'Uma deliciosa receita de bolo de chocolate.',
      ingredients: [
        '2 xícaras de farinha',
        '1 xícara de açúcar',
        '1/2 xícara de cacau em pó',
        '3 ovos',
        '1 xícara de leite',
        '1/2 xícara de óleo',
      ],
    };
    const recipe = Recipe.create(input);
    expect(recipe).toBeDefined();
    expect(recipe.getTitle()).toBe(input.title);
    expect(recipe.getDescription()).toBe(input.description);
    expect(recipe.getIngredients()).toEqual(input.ingredients);
    expect(recipe.getCreatedAt()).toBeDefined();
    expect(recipe.getUpdatedAt()).toBeDefined();
    expect(recipe.getId()).toBeDefined();
  });

  it('Deve falhar ao testar criar receita com título inválido', () => {
    const input = {
      title: '',
      description: 'Uma deliciosa receita de bolo de chocolate.',
      ingredients: [
        '2 xícaras de farinha',
        '1 xícara de açúcar',
        '1/2 xícara de cacau em pó',
        '3 ovos',
        '1 xícara de leite',
        '1/2 xícara de óleo',
      ],
    };
    expect(() => Recipe.create(input)).toThrow(ValidationError);
  });
  
  it('Deve falhar ao testar criar receita com descrição inválida', () => {
    const input = {
      title: 'Receita de Bolo',
      description: '',
      ingredients: [
        '2 xícaras de farinha',
        '1 xícara de açúcar',
        '1/2 xícara de cacau em pó',
        '3 ovos',
        '1 xícara de leite',
        '1/2 xícara de óleo',
      ],
    };
    expect(() => Recipe.create(input)).toThrow(ValidationError);
  });

  it('Deve falhar ao testar criar receita com ingrediente inválido', () => {
    const input = {
      title: 'Receita de Bolo',
      description: 'Uma deliciosa receita de bolo de chocolate.',
      ingredients: [
        '',
        '1 xícara de açúcar',
        '1/2 xícara de cacau em pó',
        '3 ovos',
        '1 xícara de leite',
        '1/2 xícara de óleo',
      ],
    };
    expect(() => Recipe.create(input)).toThrow(ValidationError);
  });
});
