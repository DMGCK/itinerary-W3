import { generateId } from "../Utils/generateId.js"

export class Reservation {
  constructor(dataObj) {
    this.id = dataObj.id || generateId()
    this.parentId = dataObj.parentId
    this.name = dataObj.name
    this.date = new Date(dataObj.date)
    this.price = dataObj.price
    this.address = dataObj.address
    this.confirmation = dataObj.confirmation
    this.type = dataObj.type
  }

  get Template() {
    return /*html */` 
    <div class="col-12 ">
      <div onclick="app.reservationsController.deleteRes('${this.id}')" class="bg-primary p-2 py-3 selectable border border-1 border-secondary shadow-sm  mt-4 rounded d-flex">

        <div class="table-header ">${this.type}</div>
        <div class="table-header ">${this.name}</div>
        <div class="table-header  table-text-center">${this.confirmation} </div>
        <div class="table-header  text-nowrap">${this.address}</div>
        <div class="table-header  end">${this.date}</div>
        <div class="table-header  end">$${this.price}</div>
      </div>
  </div> `
  }


}