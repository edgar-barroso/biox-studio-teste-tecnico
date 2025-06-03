import { InMemoryRecipeRepository } from '@/infra/repository/InMemory/InMemoryRecipeRepository';
import { Module } from '@nestjs/common';

@Module({
  providers: [
    {
      provide: 'RECIPE_REPOSITORY',
      useFactory: () => {
        return InMemoryRecipeRepository.getInstance();
      },
    },
  ],
  exports: ['RECIPE_REPOSITORY'],
})
export class DatabaseModule {}
