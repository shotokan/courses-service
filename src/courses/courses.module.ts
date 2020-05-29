import { Module } from '@nestjs/common';
import { CoursesResolver } from './resolver/courses.resolver';

@Module({
  providers: [CoursesResolver],
})
export class CoursesModule { }
