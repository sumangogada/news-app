import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-newsitem',
  templateUrl: './newsitem.component.html',
  styleUrls: ['./newsitem.component.css']
})
export class NewsitemComponent {

  @Input() dailyNewsItem: any;


}
