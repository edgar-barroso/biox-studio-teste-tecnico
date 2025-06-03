import { CreateRecipe } from "@/application/use-case/CreateRecipe";
import { InMemoryRecipeRepository } from "@/infra/repository/InMemory/InMemoryRecipeRepository";

let recipeRepository: InMemoryRecipeRepository;
let sut:CreateRecipe
describe("CreateRecipe Use Case", () => {
  beforeAll(() => {
    recipeRepository = InMemoryRecipeRepository.getInstance();
    sut = new CreateRecipe(recipeRepository);
  });
  it("deve criar uma nova receita válida", async () => {
    const data = {
      title: "Bolo de Chocolate",
      description: "Receita deliciosa",
      ingredients: ["chocolate", "farinha", "ovos"]
    };

    const {id} = await sut.execute(data);
    expect(id).toBeDefined();
    expect(recipeRepository.items).toHaveLength(1);
  });
});