import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceInUp,bounceInDown, slideInRight,fadeIn, slideInDown } from 'ng-animate';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],

   animations: [
    trigger('bounceInDown', [transition('* => *', useAnimation(bounceInDown))]),

    trigger('bounceInUp', [transition('* => *', useAnimation(bounceInUp))]),
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))]),
    trigger('slideInRight', [transition('* => *', useAnimation(slideInRight))]),
    trigger('slideInDown', [transition('* => *', useAnimation(slideInDown))])
  ],
})
export class HomepageComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
    const options = {
      strings: ['PRINCE ONYEBUCHI','A WEB DEVELOPER','A FREELANCER'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
 };
 
 const typed = new Typed('.typed-element', options);
  }

}
