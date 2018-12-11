import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
//   providedIn: 'root'
export class HttpService {
  constructor(private _http: HttpClient) {
    console.log("Entered http service file");
  }
  getGrade(id) {
    return this._http.get('/grades/' + id);
  }

  getAllGrades() {
    return this._http.get('/grades');
  }
  
  getAll() {
    return this._http.get('/grades');
  }


  getOneGrade(_id){
    return this._http.get(`/${_id}`);
  }

  onButtonClick(grades): void {
    console.log(`Click event is working with event: ${grades}`);
  }

  addGrade(newGrade){
    return this._http.post('/grades', newGrade);
  }

  editGrade(editGrade) {
    return this._http.put(`/grades/${editGrade._id}`, editGrade);
  }
  deleteGrade(_id){
  return this._http.delete(`/grades/${_id}`);
  }
  removeGrade(_id){
    return this._http.delete(`/grades/${_id}`);
  }

}





// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class HttpService {

//   constructor(private _http: HttpClient) { }

//   getAuthors() {
//     return this._http.get('/authors');
//   }

//   // createAuthor(data) {
//   //   return this._http.post('/authors', data);
//   // }

//   onButtonClick(tasks): void {
//     console.log(`Click event is working with event: ${tasks}`);
//   }


//   getAuthor(id) {
//     return this._http.get(`/authors/${id}`);
//   }

//   editAuthor(id, data) {
//     return this._http.put(`/authors/${id}`, data);
//   }

//   deleteAuthor(id) {
//     return this._http.delete(`/authors/${id}`);
//   }
  
// }

