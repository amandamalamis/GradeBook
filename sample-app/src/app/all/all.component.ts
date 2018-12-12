import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  grades = [];
  editGrade= {_id:'', assignment: '', class: '', datecompleted: Date};
  loadEdit=false;
  show: {};
  deleteGrade= {_id:'', assignment: '', class: '', datecompleted: Date};

  

  ngOnInit() {
    this.getAllGrades();
  }

  getAllGrades() {
    let observable = this._httpService.getAll();
    observable.subscribe(data => {
      console.log("successful route", data);
      for (var grade in data){
      this.grades.push(data[grade])}
      // this.tasks = data;
    })
  }

  showData(grade) {
    console.log(grade);
    // var datecompleted = '12/12/1955 12:00:00 AM';
    // datecompleted = datecompleted.split(' ')[0];
    // console.log(datecompleted + "DATE SPLIT WORKS");
    var d = new Date
    console.log(d.toDateString());

    this.show = grade;
  }
  getOneGrade(grade) {    
    this.loadEdit=true;

    var d = new Date
    console.log(d.toDateString());

    this.editGrade = {_id: grade._id, assignment: grade.assignment, class: grade.class, datecompleted: grade.datecompleted};
    console.log("Success at get one grade- edit ")
  }

  onDelete(grade) {  
    this.deleteGrade = {_id: grade._id, assignment: grade.assignment, class: grade.class, datecompleted: grade.datecompleted};
    let observable = this._httpService.deleteGrade(this.deleteGrade);
    observable.subscribe(data => {
      for (var i=0;i< this.grades.length; i++) { //this edits the tasks without a refresh by updating the tasks array (Defined above)
        if(this.grades[i]['_id'] == this.deleteGrade._id) {
          this.grades.splice(i,1); //removes array element starting at index i and for 1 value (only that index)
        }
      }

    });
  }
}
