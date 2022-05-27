import { ProxyState } from "../AppState.js";
import { Itinerary } from "../Models/Itinerary.js";
import { Reservation } from "../Models/Reservation.js";

export function saveItem() {
  console.log('saving'); 
  
  let data = {
    itineraries: ProxyState.itineraries,
    reservations: ProxyState.reservations
  }
  window.localStorage.setItem('Traveler',JSON.stringify(data));
}

export function loadItem() {
  
  let localData = JSON.parse(window.localStorage.getItem('Traveler'));
  if (localData) {
    console.log('loading'); 
    
    ProxyState.itineraries = localData.itineraries.map(t => new Itinerary(t))
    ProxyState.reservations = localData.reservations.map(l => new Reservation(l))
    console.log(ProxyState); 
    
  }
  else {
    console.log('load not successful');
  }
}