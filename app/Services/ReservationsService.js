import { ProxyState } from "../AppState.js";
import { Reservation } from "../Models/Reservation.js";


class ReservationsService {
  constructor() {

  }

  newRes(dataObj) {
    ProxyState.reservations = [...ProxyState.reservations, new Reservation(dataObj)]
    console.log( ProxyState.reservations ); 
    
  }

  deleteRes(id) {
    ProxyState.reservations = ProxyState.reservations.filter(r => r.id != id)
  }
}

export const reservationsService = new ReservationsService();