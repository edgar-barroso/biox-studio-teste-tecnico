import { Description } from "../valueObject/Description";
import { Ingredient } from "../valueObject/Ingredient";
import { Title } from "../valueObject/Title";
import { UniqueEntityId } from "../valueObject/UniqueEntityId";

export interface CreateRecipeProps {
    id?: string;
    title: string;
    description: string;
    ingredients: string[];
    updatedAt?: Date;
    createdAt?: Date;
}

export class Recipe {
    public readonly id: UniqueEntityId;
    public readonly title: Title;
    public readonly description: Description;
    public readonly ingredients: Ingredient[];
    public readonly createdAt: Date;
    public readonly updatedAt: Date;

    private constructor(
        title: string,
        description: string,
        ingredients: string[],
        id?: string,
        createdAt?: Date,
        updatedAt?: Date
    ) {
        this.id = new UniqueEntityId(id);
        this.title = new Title(title);
        this.description = new Description(description);
        this.ingredients = ingredients.map(ingredient => new Ingredient(ingredient));
        this.createdAt = createdAt || new Date();
        this.updatedAt = updatedAt || new Date();
    }

    public static create(props: CreateRecipeProps): Recipe {
        return new Recipe(
            props.title,
            props.description,
            props.ingredients,
            props.id,
            props.createdAt,
            props.updatedAt
        );
    }


    public getId(): string {
        return this.id.getValue();
    }

    public getTitle(): string {
        return this.title.getValue(); 
    }

    public getDescription(): string {
        return this.description.getValue();
    }

    public getIngredients(): string[] {
        return [...this.ingredients.map(ingredient => ingredient.getValue())]; 
    }

    public getCreatedAt(): Date {
        return new Date(this.createdAt);
    }

    public getUpdatedAt(): Date {
        return new Date(this.updatedAt);
    }
}