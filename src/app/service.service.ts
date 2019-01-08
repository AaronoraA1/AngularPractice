import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {

 items =  [{id: 0, text: "eat"},
           {id: 1, text: "sleep"},
           {id: 2, text: "repeat"}
          ];

 update(id, text){
   console.log(id)
   this.items = this.items.map(m=>
    m.id === id
      ?{id, text}
      :m
    )
 }
  constructor() { }

}
