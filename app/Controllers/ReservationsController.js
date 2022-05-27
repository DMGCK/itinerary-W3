import { ProxyState } from "../AppState.js";
import { reservationsService } from "../Services/ReservationsService.js";
import { Pop } from "../Utils/Pop.js";

export class ReservationsController {
  constructor() {
    console.log('R COntroller is working'); 
    
  }

  newRes(id) {
    window.event.preventDefault()
    console.log('attempting new res'); 
    
    let form = window.event.target
    let dataObj = {
      parentId: id,
      name: form.name.value,
      date: form.date.value,
      price: form.price.value,
      address: form.address.value,
      confirmation: form.confirmation.value,
      type: form.type.value
    }
    
    reservationsService.newRes(dataObj)
  }

  async deleteRes(id) {
    if(await Pop.confirm('are you sure you want to delete this?')){
     reservationsService.deleteRes(id) 
    }
    
  }
}