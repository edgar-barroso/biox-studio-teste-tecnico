import { RecipeRepository } from "@/domain/repository/RecipeRepository";

export interface ListAllRecipesInput {
    page?: number;
}

export interface ListAllRecipesOutput {
    recipes:{
        id: string;
        title: string;
        description: string;
        ingredients: string[];
        createdAt: Date;
    }[];
}

export class ListAllRecipes {
    constructor(private recipeRepository: RecipeRepository) {}

    async execute(input: ListAllRecipesInput): Promise<ListAllRecipesOutput> {
        const { page } = input;
        const recipes = await this.recipeRepository.fetchAll(page);

        return {
            recipes: recipes.map(recipe => ({
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                ingredients: recipe.getIngredients(),
                createdAt: recipe.getCreatedAt()
            }))
        };
    }
}