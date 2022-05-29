import { ProxyState } from "../AppState.js"
import { itinerariesService } from "../Services/ItinerariesService.js";
import { loadItem, saveItem } from "../Utils/localStorage.js";
import { Pop } from "../Utils/Pop.js";

function _drawItin() {
  console.log('draw is attempting', ProxyState.itineraries); 
  
  let template = ''
  ProxyState.itineraries.forEach(i => template += i.Template)
  document.getElementById('itinerary').innerHTML = template
  
}

export class ItinerariesController {
  constructor() {
    console.log('I controller is working')
    ProxyState.on('itineraries', _drawItin)
    ProxyState.on('reservations', _drawItin)
    ProxyState.on('itineraries',saveItem)
    ProxyState.on('reservations',saveItem)
    loadItem()
    // debugger
    _drawItin()
  }

  newItin() {
    window.event.preventDefault()
    let form = window.event.target
    console.log('make new itin', form); 

    let dataObj = {
      name: form.name.value,
      tag: form.tag.value
    }

    itinerariesService.newItin(dataObj) 
    form.reset()
    
    
  }

  async removeItin(id) {
    console.log('attempt remove', id); 
    if(await Pop.confirm('are you sure you want to delete this?')){
      itinerariesService.removeItin(id)
    }
  }

  textArea(id) {
    console.log('onblur is working', id); 
    let text = window.event.target.value
    let itin = ProxyState.itineraries.find(i =>i.id == id) 

    itin.notes = text

    ProxyState.itineraries = ProxyState.itineraries

    

    
  }
}