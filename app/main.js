import { ItinerariesController } from "./Controllers/ItinerariesController.js";
import { ReservationsController } from "./Controllers/ReservationsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  itinerariesController = new ItinerariesController()

  reservationsController = new ReservationsController()
}

window["app"] = new App();
