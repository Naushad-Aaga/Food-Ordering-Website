import { Component } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent {
  food!:Foods;
  constructor(private activatedRoute:ActivatedRoute,
    private foodservices:FoodService, private cartService:CartService, private router:Router){
        activatedRoute.params.subscribe((params)=>{
          if(params['id'])
          this.food = foodservices.getFoodById(params['id'])
        })
    }

    addToCart(){
      this.cartService.addToCart(this.food);
      this.router.navigateByUrl('cart-page')
    }
}
