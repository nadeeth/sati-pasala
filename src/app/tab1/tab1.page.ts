import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit  {

  newsPosts: any[];

  constructor(private newsService: NewsService,
              public loadingController: LoadingController) {
    
  }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    this.newsService.getPosts().subscribe(posts => {
      this.newsPosts = posts;
      loading.dismiss();
    });
  }
}
