import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceInUp,bounce, slideInLeft,fadeIn, slideInDown, bounceInDown } from 'ng-animate';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],

  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))]),
    trigger('bounceInDown', [transition('* => *', useAnimation(bounceInDown))]),

    trigger('bounceInUp', [transition('* => *', useAnimation(bounceInUp))]),
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))]),
    trigger('slideInLeft', [transition('* => *', useAnimation(slideInLeft))]),
    trigger('slideInDown', [transition('* => *', useAnimation(slideInDown))])
  ],
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
