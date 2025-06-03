import { Ingredient } from "@/domain/valueObject/Ingredient";

describe("Ingredient Value Object", () => {
  it("deve criar um ingrediente válido", () => {
    const ingredient = new Ingredient("Leite Condensado");
    expect(ingredient.getValue()).toBe("Leite Condensado");
  });

  it("deve lançar erro se o ingrediente for vazio", () => {
    expect(() => new Ingredient("")).toThrow("Ingredient must not be empty");
  });

  it("deve lançar erro se o ingrediente for só espaços", () => {
    expect(() => new Ingredient("   ")).toThrow("Ingredient must not be empty");
  });
});