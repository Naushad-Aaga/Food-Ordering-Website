import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Foods } from '../shared/models/food';
import { Cartitem } from '../shared/models/cartitem';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  static addToCart(arg0: Foods) {
    throw new Error('Method not implemented.');
  }
  private cart:Cart = new Cart();
  addToCart(food:Foods) :void{
    let cartItem = this.cart.item.find(item =>item.food.id === food.id)
    if(cartItem){
      this.changeQuantity(food.id,cartItem.quantity +1)
      return;
    }
    this.cart.item.push(new Cartitem(food));
  }
  removeFromCart(foodId:number):void{
    this.cart.item = this.cart.item.filter(item =>item.food.id !=foodId)
  }
  changeQuantity(quantity:number,foodId:number){
    let cartItem = this.cart.item.find(item =>item.food.id === foodId);
    if(!cartItem) 
    return;
    cartItem.quantity=quantity;
  }
  getCart():Cart{
    return this.cart;
  }
}
