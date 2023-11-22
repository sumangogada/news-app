import { Component, OnInit } from '@angular/core';
import { newsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private service: newsService) { }

  newsResponse: any;

  ngOnInit(): void {
    this.service.getDailyNews()
      .subscribe({
        next: (data) => {
          this.getDailyNews(data);
        }
      })
  }

  getDailyNews(response: any) {
    console.log(response);
    this.newsResponse = response;
  }

}
