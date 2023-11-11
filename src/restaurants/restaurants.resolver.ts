import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';
import {
  CreateRestaurantDto,
  CreateRestaurantDto_arg,
} from './dto/create-restaurant.dto';
import { RestaurantService } from './restaurants.service';

@Resolver((of) => Restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query(() => Boolean)
  isPizzaGood() {
    return true;
  }
  @Query((returns) => [Restaurant])
  restaurants(): Promise<Restaurant[]> {
    return this.restaurantService.getAll();
  }

  @Query((resurns) => Restaurant)
  getRestaurant(@Args('veganOnly') vg: string): Restaurant {
    return;
  }
  @Mutation((returns) => Restaurant)
  createRestaurant(
    @Args('name') name: string,
    @Args('isGood') isGood: boolean,
    @Args('isVegan') isVegan: boolean,
    @Args('address') address: string,
    @Args('ownerName') ownerName: string,
  ): boolean {
    return true;
  }
  @Mutation((returns) => Restaurant)
  createRestaurant1(
    @Args('createRestautrantInput') crInput: CreateRestaurantDto,
  ) {
    return true;
  }
  @Mutation((returns) => Boolean)
  createRestaurant2(@Args() crInput: CreateRestaurantDto_arg) {
    return true;
  }
}
