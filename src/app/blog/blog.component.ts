import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceInUp,bounceInDown, slideInRight,fadeIn, slideInDown } from 'ng-animate';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],


  animations: [
    trigger('bounceInDown', [transition('* => *', useAnimation(bounceInDown))]),

    trigger('bounceInUp', [transition('* => *', useAnimation(bounceInUp))]),
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))]),
  
  ],
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
