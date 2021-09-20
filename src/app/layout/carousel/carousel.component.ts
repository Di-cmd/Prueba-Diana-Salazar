import { Component, OnInit, AfterViewInit } from '@angular/core';

//importacion del modulo del carousel
import SwiperCore, {Swiper, Navigation, Pagination } from 'swiper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  mySwiper: Swiper;

  constructor() { }

  ngOnInit(): void {
  }

  super: any[] = [
    {
      id:'1',
      name: 'SPIDER-MAN',
      image: "spiderman",
      descripcion: 'Los 10 superhéroes más poderosos del Universo Cinematográfico Marvel Peter Parker es el único superhéroe del MCU que todavía no ha cumplido la mayoría de edad, por lo que el mero hecho de estar en esta lista debería ser honor más que suficiente. No obstante, las habilidades del hombre araña no pueden compararse a las de casi cualquier otro personaje que haya aparecido en la gran pantalla'

    },
    {
      id:'2',
      name: 'Thor',
      image: "thor",
      descripcion: 'Este asgardiano tenía desde el principio papeletas para ser uno de los mejores superhéroes Marvel. Encarna al dios nórdico del trueno y apareció por primera vez en 1962 -sí, el 62 es una buena añada de superhéroes- en la revista de historietas cortas Journey Into Mystery #83. Su alter ego fue el Doctor Donald Blake, quien encuentra un artefacto en Noruega que le confiera la identidad.'
    },
    {
      id:'3',
      name: 'Hulk',
      image: "hulk",
      descripcion: 'Stan Lee y Jack Kirby nos regalaron en... si, en 1962, un personaje que no necesita presentación. Basándose en la historia del Dr Jeckyll y Mr Hyde, Marvel lanzó The Incredible Hulk #1. Bruce Banner, quien había heredado ciertos genes mutados como si fuera una enfermedad, salvará a un joven durante una prueba de su bomba gamma.'
    },
    {
      id:'4',
      name: 'Dr Strange',
      image: "doctor",
      descripcion: 'Este prodigioso neurocirujano no apareció hasta el Strange tales #110, publicado en 1063 -casi, casi-. Tras un accidente que le provocó una extraña enfermedad en las manos, Stephen Strange tuvo que dejar su trabajo, posteriormente perdería a su padre y su hermano y acabó aprendiendo con El Anciano en el Tibet, un enigmático personaje con gran poder que le enseñaría magia  '
    },

  ]


  ngAfterViewInit() {

    SwiperCore.use([Navigation, Pagination]);

    this.mySwiper = new Swiper(".swiper-container", {
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
        }
      });
  }
}