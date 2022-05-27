import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Itinerary } from "./Models/Itinerary.js";
import { Reservation } from "./Models/Reservation.js";

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  // values = []
  /** @type {import('./Models/Itinerary').Itinerary[]} */
  /** @type {import('./Models/Reservation').Reservation[]} */


  itineraries = [
    new Itinerary({
      name:'test Itinerary',
      tag:'3 people going to yo mommas place'
    }),
    new Itinerary({
      name:'Your Mommas Trip',
      tag: 'Its her birthday and she loves it'
    })
  ];

  reservations = [];
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
