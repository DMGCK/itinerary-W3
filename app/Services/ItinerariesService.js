import { ProxyState } from "../AppState.js";
import { ItinerariesController } from "../Controllers/ItinerariesController.js"
import { Itinerary } from "../Models/Itinerary.js";

class ItinerariesService {
  constructor() {

  }

  newItin(dataObj) {
    console.log('made it to the service', dataObj); 
    ProxyState.itineraries = [...ProxyState.itineraries, new Itinerary(dataObj)]
    
  }
  removeItin(id) {
    console.log('made it to the service'); 
    ProxyState.itineraries = ProxyState.itineraries.filter(i => i.id != id)
  }
}

export const itinerariesService = new ItinerariesService()