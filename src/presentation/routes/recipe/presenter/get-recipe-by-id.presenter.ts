import { GetRecipeByIdOutput } from "@/application/use-case/GetRecipeById";

export class GetRecipeByIdPresenter {
  static toHTTP(recipe: GetRecipeByIdOutput) {
    return {
      id: recipe.id,
      title: recipe.title,
      description: recipe.description,
      ingredients: recipe.ingredients,
      createdAt: recipe.createdAt,
    };
  }
}
