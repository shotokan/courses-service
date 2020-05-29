import { Resolver, Query } from "@nestjs/graphql";

@Resolver()
export class CoursesResolver {
  constructor(
    // private authorsService: AuthorsService,
    // private postsService: PostsService,
  ) { }

  @Query(() => String)
  async hello() {
    return 'Hola mundo';
  }
}