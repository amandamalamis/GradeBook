import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  // products = [];
  // editProduct= {_id: '', title: '', price: '', url: ''};
  // loadEdit=false;
  // show: {};
  // deleteProduct= {_id: '', title: '', price: '', url: ''};


  ngOnInit() {
    // this.getAllProducts();
  }

  // getAllProducts() {
  //   let observable = this._httpService.getAll();
  //   observable.subscribe(data => {
  //     console.log("successful route", data);
  //     for (var product in data){
  //     this.products.push(data[product])}
  //     // this.tasks = data;
  //   })
  // }

  // getOneProduct(product) {    
  //   this.loadEdit=true;
  //   this.editProduct={_id: task._id, title: task.title, description: task.description};
  //   console.log("Success at getone task- edit ")
  // }

  // onDelete(task) {  
  //   this.deleteTask = {_id:task._id, title: task.title, description: task.description};
  //   let observable = this._httpService.deleteTask(this.deleteTask);
  //   observable.subscribe(data => {
  //     for (var i=0;i< this.tasks.length; i++) { //this edits the tasks without a refresh by updating the tasks array (Defined above)
  //       if(this.tasks[i]['_id'] == this.deleteTask._id) {
  //         this.tasks.splice(i,1); //removes array element starting at index i and for 1 value (only that index)
  //       }
  //     }

//     });
//   }
// }
}
