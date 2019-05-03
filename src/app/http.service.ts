import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private http: HttpClient) { }


  getOpenIssues(name, date){

    return this.http.get(`https://api.github.com/search/issues?q=${name} is:open is:issue created:<=${date}`)
    .pipe (
      catchError(err => {
        console.log('Handling error locally and rethrowing it...', err);
        throw(err);
    })
    );
  }

  yesterdayOpenIssues(name, date, yesterday){

    return this.http.get(`https://api.github.com/search/issues?q=${name} is:open is:issue created:<=${yesterday} .. ${date}`)
    .pipe (
      catchError(err => {
        console.log('Handling error locally and rethrowing it...', err);
        throw(err);
    })
    );
  }

  pastOpenIssues(name, date, sevenaysAgo){

    return this.http.get(`https://api.github.com/search/issues?q=${name} is:open is:issue created:<=${sevenaysAgo} .. ${date}`)
    .pipe (
      catchError(err => {
        console.log('Handling error locally and rethrowing it...', err);
        throw(err);
    })
    );
  }


}
