import { Recipe } from "../entity/Recipe";

export interface RecipeRepository {
    fetchAll(page?: number): Promise<Recipe[]>;
    create(recipe: Recipe): Promise<Recipe>;
    findById(id: string): Promise<Recipe | undefined>;
}