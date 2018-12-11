import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  showGrade = { _id: "", assignment: "", grade: "", created_at: Date, updated_at: Date };
  grades = [];
  idToView = ""
  params: any;
  // show: object;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() { 
    this._route.params.subscribe((params: Params) => {
    this.idToView = params['id'];
    this.getGrade();
  })
}

  goHome() {
    this._router.navigate(['/']);
    this.getGrade();
  }

  getGrade(){
    let observable = this._httpService.getGrade(this.idToView);
    observable.subscribe(data => {
      console.log('got grade: ', data)
      this.showGrade = data['grade'];
    })
  }
  
  showData(grade) {
    console.log(grade);
    this.showGrade = grade;
  }
}

