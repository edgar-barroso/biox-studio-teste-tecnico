import { Recipe } from "@/domain/entity/Recipe";
import { RecipeRepository } from "@/domain/repository/RecipeRepository";


export interface CreateRecipeInput{
    title: string;
    description: string;
    ingredients: string[];
}
export interface CreateRecipeOutput{
    id: string;
}


export class CreateRecipe {
    constructor(private recipeRepository: RecipeRepository) {}

    async execute(input: CreateRecipeInput): Promise<CreateRecipeOutput> {
        const { title, ingredients, description } = input;
        const recipe = Recipe.create({
            title,
            ingredients,
            description
        });

        const createdRecipe = await this.recipeRepository.create(recipe);

        return {
            id: createdRecipe.getId()
        };
    }
}