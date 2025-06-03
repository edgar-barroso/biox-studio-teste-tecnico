import { RecipeRepository } from "@/domain/repository/RecipeRepository";
import { RecipeNotFoundError } from "../error/RecipeNotFoundError";

export interface GetRecipeByIdInput {
    id: string;
}
export interface GetRecipeByIdOutput {
    id: string;
    title: string;
    description: string;
    ingredients: string[];
    createdAt: Date;
}

export class GetRecipeById {
    constructor(private recipeRepository: RecipeRepository) {}

    async execute(input: GetRecipeByIdInput): Promise<GetRecipeByIdOutput> {
        const { id } = input;
        const recipe = await this.recipeRepository.findById(id);

        if (!recipe) {
            throw new RecipeNotFoundError();
        }

        return {
            id: recipe.getId(),
            title: recipe.getTitle(),
            description: recipe.getDescription(),
            ingredients: recipe.getIngredients(),
            createdAt: recipe.getCreatedAt()
        };
    }
}