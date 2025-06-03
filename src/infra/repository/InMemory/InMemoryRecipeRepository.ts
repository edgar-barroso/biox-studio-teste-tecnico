import { Recipe } from '@/domain/entity/Recipe';
import { RecipeRepository } from '@/domain/repository/RecipeRepository';
import { env } from '@/env';

export class InMemoryRecipeRepository implements RecipeRepository {
  public items: Recipe[] = [];
  private constructor() {}
  private static instance: InMemoryRecipeRepository;
  public static getInstance(): InMemoryRecipeRepository {
    if (!InMemoryRecipeRepository.instance) {
      InMemoryRecipeRepository.instance = new InMemoryRecipeRepository();
    }
    return InMemoryRecipeRepository.instance;
  }
  async fetchAll(page?: number): Promise<Recipe[]> {
    if (!page) page = 1;
    return this.items.slice(
      (page - 1) * env.MAX_PAGE_LENGTH,
      (page - 1) * env.MAX_PAGE_LENGTH + env.MAX_PAGE_LENGTH,
    );
  }
  async create(recipe: Recipe): Promise<Recipe> {
    this.items.push(recipe);
    return recipe;
  }
  async findById(id: string): Promise<Recipe | undefined> {
    return this.items.find((recipe) => recipe.getId() === id);
  }
}
