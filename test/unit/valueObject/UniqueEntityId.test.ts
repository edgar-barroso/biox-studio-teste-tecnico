import { UniqueEntityId } from "@/domain/valueObject/UniqueEntityId";

describe("UniqueEntityId Value Object", () => {
  it("deve gerar um UUID automaticamente se não for passado", () => {
    const id = new UniqueEntityId();
    const value = id.getValue()
    expect(typeof value).toBe("string");
    expect(value.length).toBeGreaterThan(0);
  });

  it("deve aceitar um UUID customizado", () => {
    const customId = "123e4567-e89b-12d3-a456-426614174000";
    const id = new UniqueEntityId(customId);
    expect(id.getValue()).toBe(customId);
  });
});