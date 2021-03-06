import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor(private NewsService:NewsService , private router:Router) { }

  data:any;



  ngOnInit() {
    this.NewsService.getData('top-headlines?country=in').subscribe(data =>{
      if(data)
      { this.data = data;}
      else
      {
        this.data =[{
          'author':'Sample Data',
          'publishedAt':'Sample Data',
          'title':'Sample Data',
          'urlToImage':'../../assets/app-images/image-not-found.png',
          'description':'Sample Data',
          'content':'Sample Data'}];
      }

    });
  }

  onGoToNewsSinglePage(article){ //console.log(article);
    this.NewsService.currentArticle = article;
    this.router.navigate(['/news-single'])
  }


}
