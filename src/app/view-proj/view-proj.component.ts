import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-proj',
  templateUrl: './view-proj.component.html',
  styleUrls: ['./view-proj.component.scss']
})
export class ViewProjComponent implements OnInit {


  vasilio = {
    heading: "Vasilio",
    intro: "Vasilio is an Ecommerce website with inventories varies from T-shirts to eyewares. In this project, I used Angular for the front- end and Express framework on top of NodeJs for the back-end. Becase of the complex nature of ecommerce application state, I used redux for the state management.",
    img: "assets/img/p1.png",
    mobile: {
      p: "Since the target audience for this project are mostly young adult and majority of them use mobile devices to access the website, mobile friendliness is one of the top priority for building this project.",
      img: "assets/img/p1-2.png"
    },
    performance: {
      p: "Studies showed that 1 second delay reduces page views by 11% and customer satisfaction by 16%. Because of that, optimizing the performance is very important factor for building this website. Base on the matrix derived from the test tools, current website out performed simlar ecommerce websites like forever21 express, old navy and gap.",
      img: "assets/img/perform.png"
    },
    deployment: {
      p: "I used travis CI for continuous integration and deployment. The front-end is deployed on gitHub page and the backend api is deployed on Heroku server.",
      img: "assets/img/trav.png"
    }
  };
  theLux = {
    heading: "The Lux",
    intro: "The Lux is a luxury real-estate website offer the most luxurious and prestige estates around the triangle area. I used Angular for the front-end with node js and mongoDB backend. I used google map api to present the user with the exact location of each estate.",
    img: "assets/img/the-lux.png",
    mobile: {
      p: "The website is designed and built withmobile friendliness in mind, in order to reach the broader audience.",
      img: "assets/img/mb2.png"
    },
    performance: {
      p: "Studies showed that 1 second delay reduces page views by 11% and customer satisfaction by 16%. Because of that, optimizing the performance is very important factor for building this website. Base on the matrix derived from the test tools, current website out performed simlar real estate websites.",
      img: "assets/img/perform.png"
    },
    deployment: {
      p: "I used travis CI for continuous integration and deployment. The front-end is deployed on gitHub page and the backend api is deployed on Heroku server.",
      img: "assets/img/trav.png"
    }
  };
  data;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.url.subscribe((l) => {
      if (l[0].path === "vasilio") {
        this.data = this.vasilio;
      } else if (l[0].path === "the-lux") {
        this.data = this.theLux;
      }
    })

  }

}
