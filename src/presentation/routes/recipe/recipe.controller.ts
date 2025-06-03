import { Body, Controller, Get, Inject, Param, Post, Query } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { CreateRecipe } from '@/application/use-case/CreateRecipe';
import { RecipeRepository } from '@/domain/repository/RecipeRepository';
import { GetRecipeById } from '@/application/use-case/GetRecipeById';
import { GetRecipeByIdPresenter } from './presenter/get-recipe-by-id.presenter';
import { ListAllRecipes } from '@/application/use-case/ListAllRecipes';
import { ListAllRecipesPresenter } from './presenter/list-all-recipes.presenter';

@Controller()
export class RecipeController {
  constructor(
    @Inject('RECIPE_REPOSITORY')
    private readonly recipeRepository: RecipeRepository,
  ) {}

  @Post('recipe')
  async createRecipe(@Body() createRecipeDto: CreateRecipeDto) {
    const createRecipeUseCase = new CreateRecipe(this.recipeRepository);
    const { id } = await createRecipeUseCase.execute(createRecipeDto);
    return { id };
  }

  @Get('recipes')
  async listAllRecipes(@Query('page') page: number) {
    const listAllRecipesUseCase = new ListAllRecipes(this.recipeRepository);
    const { recipes } = await listAllRecipesUseCase.execute({ page:Number(page) });
    return ListAllRecipesPresenter.toHTTP(recipes);
  }

  @Get('recipe/:id')
  async getRecipeById(@Param('id') id: string) {
    const getRecipeByIdUseCase = new GetRecipeById(this.recipeRepository);
    const recipe = await getRecipeByIdUseCase.execute({ id });
    return GetRecipeByIdPresenter.toHTTP(recipe);
  }


}
