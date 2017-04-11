import { Injectable } from "@angular/core";

// A shared memory between components
// and between initializations of components

@Injectable()
export class DataExchange {

   static globalMem = {}; // global for everyone
   static localMem = {};  // local per class/component

   create(that:any){ 
     // call from any component using this service with this as argument
     // to get a components specific memory that survives
     // between route changes
     let className = that.constructor.name;
     DataExchange.localMem[className] = DataExchange.localMem[className] || {};
     return DataExchange.localMem[className];
   }

   global(){
     // call from any component using this service
     // to get a global memory shared between all components 
     return DataExchange.globalMem;
   }

}