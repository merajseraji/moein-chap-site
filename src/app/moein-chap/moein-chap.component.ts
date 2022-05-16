import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-moein-chap',
  templateUrl: './moein-chap.component.html',
  styleUrls: ['./moein-chap.component.scss']
})
export class MoeinChapComponent implements OnInit {

  constructor() {
  }

  innerWidth: any;
  backgroundImage = '';
  backgroundImageStore = [
    'url(../assets/img/1.jpg)',
    'url(../assets/img/letter.jpg)',
    'url(../assets/img/Heidelberg.jpg)',
  ];
  isShow = false;

  @HostListener('window:resize', []) onResize() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:scroll') checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isShow = scrollPosition >= 50;
  }

  ngOnInit(): void {
    this.setIndexImage();
  }

  setIndexImage() {
    const randomNumber = Math.floor(Math.random() * this.backgroundImageStore.length);
    this.backgroundImage = this.backgroundImageStore[randomNumber];
  }

  topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  scrollTo(item) {
    if (item.target.id === 'toProducts') {
      document.getElementById('products').scrollIntoView({behavior: 'smooth'});
    } else if (item.target.id === 'toCustomers') {
      document.getElementById('customers').scrollIntoView({behavior: 'smooth'});
    } else if (item.target.id === 'toFooter') {
      document.getElementById('footer').scrollIntoView({behavior: 'smooth'});
    }
  }

}
