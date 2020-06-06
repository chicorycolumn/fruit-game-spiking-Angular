import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //This overrides the TEMPLATE and STYLEURLS below.
  template: `<h2 id="yellowTitle">{{ niceTitle }}</h2>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  niceTitle: string;
  title: string;
  fruit: string[];
  showThisBit = true;
  toggleFruitInventoryDisplay() {
    this.showThisBit = !this.showThisBit;
  }
  getFruit(key) {
    this.fruits.forEach((fr) => {
      if (fr.key === key) {
        let revertedSrc = fr.src;
        fr.src = '../assets/sparkle.gif';

        setTimeout(() => {
          fr.src = revertedSrc;
          fr.show = false;
        }, 500);

        fr.quantity++;
      }
    });

    console.log(this.fruit);
  }

  timeoutFruits() {
    this.fruits.forEach((fr) => {
      setTimeout(() => {
        this.fruits.forEach((fru) => {
          if (fru.key == fr.key) {
            fru.show = false;
          }
        });
      }, Math.random() * 1500);
    });
  }

  refruit() {
    this.fruits.forEach((fr) => {
      fr.show = !!Math.floor(Math.random() * 2);
      fr.margin = `${(Math.random() * 100).toFixed(0)}px`;
    });

    this.timeoutFruits();
  }

  fruits = [
    {
      show: !!Math.floor(Math.random() * 2),
      margin: `${(Math.random() * 100).toFixed(0)}px`,
      src: '../assets/grapes.png',
      key: 'g',
      name: 'grape',
      quantity: 0,
    },
    {
      show: !!Math.floor(Math.random() * 2),
      margin: `${(Math.random() * 100).toFixed(0)}px`,
      src: '../assets/peach.png',
      key: 'p',
      name: 'peach',
      quantity: 0,
    },
    {
      show: !!Math.floor(Math.random() * 2),
      margin: `${(Math.random() * 100).toFixed(0)}px`,
      src: '../assets/pineapple.png',
      key: 'a',
      name: 'pineapple',
      quantity: 0,
    },
    {
      show: !!Math.floor(Math.random() * 2),
      margin: `${(Math.random() * 100).toFixed(0)}px`,
      src: '../assets/watermelon.png',
      key: 'w',
      name: 'watermelon',
      quantity: 0,
    },
  ];

  constructor() {}

  ngOnInit() {
    this.niceTitle = 'Welcome to Fruitr'; //'heyy this could be used to get from BE'
    this.title = 'yooo boys';
  }
}
