import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {

  constructor(private NewsService:NewsService ) { }

  article:any;

  ngOnInit() {
    if(this.NewsService.currentArticle)
    {
      this.article = this.NewsService.currentArticle;
    }
    else{
      this.article ={
      'author':'Sample Data',
      'publishedAt':'Sample Data',
      'title':'Sample Data',
      'urlToImage':'../../assets/app-images/image-not-found.png',
      'description':'Sample Data',
      'content':'Sample Data'};
    }

  }

}
