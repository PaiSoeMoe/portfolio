import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.scss']
})
export class SocketComponent implements OnInit {

  potato = {
    heading: "Potato Chat",
    intro: "Potato Chat is part of the functionality from the dating website that I have developed.I use the power of websocket to provide reliable chat service to the users.",
    img: "assets/img/potato.png",
    mobile: {
      head: "Real-time messaging",
      p: "Real time messaging and notification feature were build by using the power of websocket.In the future, I have plan to add video call feature by using webRTC technology. ",
      img: "assets/img/chat.png"
    },
  };

  data;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.url.subscribe((l) => {
      if (l[0].path === "socket") {
        this.data = this.potato;
      } else if (l[0].path === "the-lux") {

      }
    })

  }

}
