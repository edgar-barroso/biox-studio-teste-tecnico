import { ListAllRecipes } from '@/application/use-case/ListAllRecipes';
import { Recipe } from '@/domain/entity/Recipe';
import { env } from '@/env';
import { InMemoryRecipeRepository } from '@/infra/repository/InMemory/InMemoryRecipeRepository';

let recipeRepository: InMemoryRecipeRepository;
let sut: ListAllRecipes;
let recipesData: {
  title: string;
  description: string;
  ingredients: string[];
  createdAt: Date;
  id: string;
}[] = [];
describe('ListAllRecipes Use Case', () => {
  beforeAll(() => {
    recipeRepository =  InMemoryRecipeRepository.getInstance();
    sut = new ListAllRecipes(recipeRepository);
    for (let i = 0; i < 50; i++) {
      recipesData.push({
        id: `recipe-${i}`,
        title: `Bolo de Chocolate ${i}`,
        description: `Receita deliciosa ${i}`,
        ingredients: ['chocolate', 'farinha', 'ovos'],
        createdAt: new Date(),
      });
    }
    recipeRepository.items = recipesData.map((data) => Recipe.create(data));
  });
  it('deve listar todas as N receitas (sendo N o tamanho maximo por página)', async () => {
    const page = 1;
    const { recipes } = await sut.execute({ page });
    expect(recipes).toEqual(recipesData.slice(0, env.MAX_PAGE_LENGTH));
  });
  it('deve listar todas as N receitas da página 2 (sendo N o tamanho maximo por página)', async () => {
    const page = 2;
    const { recipes } = await sut.execute({ page });
    expect(recipes).toEqual(
      recipesData.slice(env.MAX_PAGE_LENGTH, env.MAX_PAGE_LENGTH * 2),
    );
  });

  it('deve listar todas as receitas restantes ao fim das paginas', async () => {
    const page = 3;
    const { recipes } = await sut.execute({ page });
    expect(recipes).toEqual(recipesData.slice(env.MAX_PAGE_LENGTH * 2));
  });

  it('deve retornar vazio caso não haja mais receitas', async () => {
    const page = 4;
    const { recipes } = await sut.execute({ page });
    expect(recipes).toEqual([]);
  });

});
