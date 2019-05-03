import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  github = { 'url' : ''};
  obj: any ={'open' : '',
        'yesterday' : '',
        'sevenDaysAgo' : '',
        'pastSevenDays' : '',
        'loading' : false,
        'first' : true
  }

  constructor(private http : HttpService) { }

  ngOnInit() {


  }

  getIssues(){
    const url = this.github.url;
    const userName = url.split('/')[3];
    const date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    const yesterday =  formatDate(new Date().setDate(new Date().getDate()-1), 'yyyy-MM-dd', 'en');
    const sevenDaysAgo =  formatDate(new Date().setDate(new Date().getDate()-7), 'yyyy-MM-dd', 'en');

    console.log(sevenDaysAgo);

  // Subscribing to the service getOpenIssues method and assigning response to object(obj)
    this.http.getOpenIssues(userName, date)
    .subscribe( res =>

      {this.obj.open = res
        console.log(this.obj.open)
      }

      );
  // Subscribing to the service yesterdayOpenIssues method and assigning response to object(obj)

      this.http.yesterdayOpenIssues(userName, date, yesterday)
      .subscribe( res =>

        {this.obj.yesterday = res;
          console.log(this.obj.yesterday);
        }

        );
  // Subscribing to the service pastOpenIssues method and assigning response to object(obj)

        this.http.pastOpenIssues(userName, date, sevenDaysAgo)
      .subscribe( res =>

        {this.obj.sevenDaysAgo = res;
          console.log(this.obj.yesterday);
        }

        );

    // Subscribing to the service getOpenIssues method and assigning response to object(obj)

        this.http.getOpenIssues(userName, sevenDaysAgo)
        .subscribe( res =>

          {this.obj.pastSevenDays = res
            console.log(this.obj.pastSevenDays)
          }

          );

          this.obj.loading = true;
          this.obj.first = false;
          this.github.url = '';
  }

}
