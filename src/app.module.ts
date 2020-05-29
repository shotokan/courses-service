import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { doc } from 'prettier';
import join = doc.builders.join;
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/schema.gql',
      playground: true,
      debug: true,
    }),
    CoursesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
