import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '@/app.module';
import { DatabaseModule } from '@/presentation/globals/database.module';
import { env } from '@/env';

describe('RecipeController (e2e)', () => {
  let app: INestApplication;
  let createdId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ (POST) cria uma receita', async () => {
    const dto = {
      title: 'Bolo de Chocolate',
      description: 'Um bolo delicioso',
      ingredients: ['chocolate', 'farinha', 'açúcar'],
    };
    const response = await request(app.getHttpServer())
      .post('/recipe')
      .send(dto)
      .expect(201);
    expect(response.body).toHaveProperty('id');
    createdId = response.body.id;
  });

  it('/:id (GET) busca uma receita por id', async () => {
    const response = await request(app.getHttpServer())
      .get(`/recipe/${createdId}`)
      .expect(200);
    expect(response.body).toMatchObject({
      id: createdId,
      title: 'Bolo de Chocolate',
      description: 'Um bolo delicioso',
      ingredients: ['chocolate', 'farinha', 'açúcar'],
    });
  });
  


  it('/:page (GET) lista todas as receitas', async () => {
    for( let i = 0; i < env.MAX_PAGE_LENGTH+1; i++) {
      const dto = {
        title: `Recipe ${i + 1}`,
        description: `Description for recipe ${i + 1}`,
        ingredients: [`ingredient1-${i + 1}`, `ingredient2-${i + 1}`],
      };
      await request(app.getHttpServer())
        .post('/recipe')
        .send(dto)
        .expect(201);
    }
    const response = await request(app.getHttpServer())
      .get('/recipes?page=1')
      .expect(200);
    expect(response.body).toHaveLength(env.MAX_PAGE_LENGTH);
  });
});
