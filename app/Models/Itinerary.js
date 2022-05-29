import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";


export class Itinerary {
  constructor(dataObj) {
    this.id = (dataObj.id || generateId())
    this.name = dataObj.name
    this.tag = dataObj.tag
    this.notes = dataObj.notes || ''
  }

  get tabTemplate() {
    let template = ''
    ProxyState.itineraries.forEach(i => {
      template += `
      `
    })
  }
 

  // TODO collapse whole thing
  get Template() {
    return /*html */ `
    <div class="m-2 p-3 bg-light rounded">
    <h3 class="p-2 pb-4 m-0 d-flex justify-content-between">
      <span class=" rounded p-1 border border-0">${this.name} - <span class="text-muted fs-4"> ${this.tag}</span>
    </span>
    
    
    <div class="text-end">${this.Total ? "$" : ''}${this.Total ? this.Total : ''}</div>
    <div onclick="app.itinerariesController.removeItin('${this.id}')" class="btn btn-danger mdi mdi-delete"></div>
  </h3>

    <div class="row">
      <div class="col-12 ">

    
    
    <div class="bg-expedia p-2 rounded d-flex fw-bold shadow-sm">


          <div class="table-header">Type</div>
          <div class="table-header">Name</div>
          <div class="table-header table-text-center">Confirmation</div>
          <div class="table-header">Address</div>
          <div class="table-header end">Date</div>
          <div class="table-header end">Cost</div>
        </div>
      </div>
    </div>
    <div id="itineraries" class="row">
      <div class="col-12 ">
        
          ${this.getReservations ? this.getReservations : '<div id="reservations" class="bg-primary p-2 py-3 border border-1 border-secondary shadow-sm  mt-4 rounded d-flex"> No Reservations Saved </div>'}
        
      </div>
    </div>
    <p class="my-4">
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${this.id}-form" aria-expanded="false" aria-controls="collapse${this.id}-form">
                  New Reservation
                </button>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${this.id}-notes" aria-expanded="false" aria-controls="collapse${this.id}-notes">
                  Notes
                </button>
              </p>
              
              <div class="collapse" id="collapse${this.id}-form">
                <div class="card card-body">
                 
                  

                  <div id="reservation-form" class="row">
                    <div class="col">
                      <div class="border border-1 border-secondary shadow-sm rounded my-3 p-3">
                        <h4>New Reservation</h4>
                        <form onsubmit="app.reservationsController.newRes('${this.id}')">
    
                          <div class="row justify-content-center">
    
                            <div class="col-md-6">
                              <div class="mb-3">
                                <label for="" class="form-label"></label>
                                <input type="text" class="form-control" required name="name" id="name" aria-describedby="helpId" placeholder="Name of Reservation">
                              </div>
                            </div>
    
                            <div class="col-md-3 col-6 ">
                              <div class="mb-3">
                                <label for="" class="form-label"></label>
                                <input class="form-control" type="date" name="date" id="date"></div>
                              </div>
    
                              <div class="col-md-3 col-6 ">
                                <div class="mb-3">
                                  <label for="" class="form-label"></label>
                                  <input class="form-control" type="number" placeholder="Price" name="price" id="price"></div>
                                </div>
    
    
                                <div class="col-md-6">
                                  <div class="mb-3">
                                    <label for="" class="form-label"></label>
                                    <input type="text" class="form-control" required name="address" id="address" aria-describedby="helpId" placeholder="Address">
                                  </div>
                                </div>
        
                                <div class="col-md-3 col-6 ">
                                  <div class="mb-3">
                                    <label for="" class="form-label"></label>
                                    <input class="form-control" placeholder="Confirmation" type="text" name="confirmation" id="confirmation"></div>
                                  </div>
        
                                  <div class="col-md-3 col-6 ">
                                    <div class="mb-3">
                                      <label for="" class="form-label"></label>
                                      <input class="form-control" type="text" placeholder="Type" name="type" id="type"></div>
                                    </div>
    
                                    <button class="btn btn-warning btn-outline-success text-dark w-25">Add Reservation</button>
                          </div>
    
                        </form>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div class="collapse" id="collapse${this.id}-notes">
                <div class="card card-body">
                  
                  <textarea name="${this.id}textarea" id="${this.id}textarea" onblur="app.itinerariesController.textArea('${this.id}')" cols="30" rows="10">${this.notes}</textarea>
                </div>
              </div>
            </div>
    `
  }

  get getReservations() {
    let res = ProxyState.reservations.filter(r => r.parentId == this.id)
    const sortedRes = res.sort((a, b) => a.date - b.date)
    console.log(sortedRes); 
    
    let template = ''

    sortedRes.forEach(r => template += r.Template)
    return template
  }

  get Total() {
    let res = ProxyState.reservations.filter(r => r.parentId == this.id)
    let total = 0;

    res.forEach(r => total += parseInt(r.price))
    return total
  }
}
  // <div class="table-header ">Airline</div>
  // <div class="table-header ">Delta BOS -> LGA</div>
  // <div class="table-header  table-text-center">645TR3 </div>
  // <div class="table-header  text-nowrap">Boston Hobby Airport</div>
  // <div class="table-header  end">July 4, 2022</div>
  // <div class="table-header  end">$1700</div>