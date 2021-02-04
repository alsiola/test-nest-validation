import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/broken (GET)', async () => {
    const response = await request(app.getHttpServer())
      .post('/broken')
      .send({ age: 'a string' });

    expect(response.status).toBe(400);
  });

  it('/works (GET)', async () => {
    const response = await request(app.getHttpServer())
      .post('/works')
      .send({ age: 'a string' });

    expect(response.status).toBe(400);
  });
});
