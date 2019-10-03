import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, slideInRight,fadeIn,flash} from 'ng-animate';
@Component({
  selector: 'app-appfooter',
  templateUrl: './appfooter.component.html',
  styleUrls: ['./appfooter.component.css'],

  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))]),
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))]),
    trigger('slideInRight', [transition('* => *', useAnimation(slideInRight))]),
    trigger('flash', [transition('* => *', useAnimation(flash,{
      params: { timing: 2, delay: 1 }
    }))])
  ],
})
export class AppfooterComponent implements OnInit {
  flash : any;

  constructor() { }

  ngOnInit() {
  }

}
