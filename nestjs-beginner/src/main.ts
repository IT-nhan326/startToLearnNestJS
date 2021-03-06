import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //setup a nest server "NestFactory"
  const app = await NestFactory.create(AppModule);
  
  //start listening on port 3000
  await app.listen(3000);
}
bootstrap();
