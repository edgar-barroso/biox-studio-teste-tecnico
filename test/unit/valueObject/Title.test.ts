import { Title } from "@/domain/valueObject/Title";

describe("Title Value Object", () => {
  it("deve criar um título válido", () => {
    const title = new Title("Receita Top");
    expect(title.getValue()).toBe("Receita Top");
  });

  it("deve lançar erro se o título for vazio", () => {
    expect(() => new Title("")).toThrow("Title must not be empty");
  });

  it("deve lançar erro se o título for só espaços", () => {
    expect(() => new Title("   ")).toThrow("Title must not be empty");
  });
});