import { Description } from "@/domain/valueObject/Description";

describe("Description Value Object", () => {
  it("deve criar uma descrição válida", () => {
    const description = new Description("Essa é uma descrição boa.");
    expect(description.getValue()).toBe("Essa é uma descrição boa.");
  });

  it("deve lançar erro se a descrição for vazia", () => {
    expect(() => new Description("")).toThrow("Description must not be empty");
  });

  it("deve lançar erro se a descrição for só espaços", () => {
    expect(() => new Description("    ")).toThrow("Description must not be empty");
  });
});