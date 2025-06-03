export class ListAllRecipesPresenter {
  static toHTTP(recipes: Array<{ id: string; title: string; description: string; ingredients: string[]; createdAt: Date }>) {
    return recipes.map(recipe => ({
      id: recipe.id,
      title: recipe.title,
      description: recipe.description,
      ingredients: recipe.ingredients,
      createdAt: recipe.createdAt,
    }));
  }
}