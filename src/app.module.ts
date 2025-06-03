import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RecipeModule } from './presentation/routes/recipe/recipe.module';

@Module({
  imports: [RecipeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
