import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editGrade = { _id: "", assignment: "", class: "", datecompleted: Date};
  grades = [];
  error = { assignment: '', class: '', datecompleted: Date};
  message: any;
  loadEdit = false;
  idToEdit = ""
  params: any;
  
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
      this._route.params.subscribe((params: Params) => {
      this.idToEdit = params['id'];
      this.getGrade();
    })
  }
  
  goToAll() {
    this._router.navigate(['/grades']);
  }

  getGrade(){
    let observable = this._httpService.getGrade(this.idToEdit);
    observable.subscribe(data => {
      console.log('got assignment/grade: ', data)
      this.editGrade = data['grade'];
    })
  }

  onSubmitEdit() {
    let observable = this._httpService.editGrade(this.editGrade);
    observable.subscribe(data => {
      if (data['errors']){
        this.error = data['errors'];
      }
      else{
        this.goToAll();
        // this._router.navigate(['/home'])
      }
      // console.log("Data from EDIT ", data);
      // this.editTask = { _id: "", title: "", description: "" };
    })
  }

}

