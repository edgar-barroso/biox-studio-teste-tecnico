import { Module } from '@nestjs/common';
import { RecipeController } from './recipe.controller';
import { DatabaseModule } from '@/presentation/globals/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RecipeController],
  providers: [],
})
export class RecipeModule {}
