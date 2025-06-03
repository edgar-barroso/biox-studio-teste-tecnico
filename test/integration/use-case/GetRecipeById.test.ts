import { CreateRecipe } from "@/application/use-case/CreateRecipe";
import { GetRecipeById } from "@/application/use-case/GetRecipeById";
import { Recipe } from "@/domain/entity/Recipe";
import { InMemoryRecipeRepository } from "@/infra/repository/InMemory/InMemoryRecipeRepository";

let recipeRepository: InMemoryRecipeRepository;
let sut:GetRecipeById

describe("GetRecipeById Use Case", () => {
  beforeAll(() => {
    recipeRepository =  InMemoryRecipeRepository.getInstance();
    sut = new GetRecipeById(recipeRepository);
  });
  it("deve retornar uma receita existente", async () => {
    const data = {
      title: "Bolo de Chocolate",
      description: "Receita deliciosa",
      ingredients: ["chocolate", "farinha", "ovos"] 
    };
    const recipe = Recipe.create(data);
    recipeRepository.items.push(recipe);
    
    const recipeData = await sut.execute({ id: recipe.getId() });
    expect(recipeData).toEqual({
      id: recipe.getId(),
      ...data,
      createdAt: recipe.getCreatedAt(),
    });
  });
});