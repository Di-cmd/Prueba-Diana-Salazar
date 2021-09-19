import { Component, OnInit, AfterViewInit } from '@angular/core';

//importacion del modulo del carousel
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  imagen:String[]=[
    "/assets/spiderman.jpg",
    "/assets/thor.jpg",
    "/assets/hulk.jpg",
    "/assets/doctor.jpg",

  ];

  mySwiper: Swiper;
  constructor() { }

  ngOnInit(): void {
  }

  AfterViewInit():void {
    this.mySwiper= new Swiper('.swiper-container');
  
  }

}
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});