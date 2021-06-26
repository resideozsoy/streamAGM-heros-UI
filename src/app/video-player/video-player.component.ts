import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  //styleUrls: ['./video-player.component.css'],
})
export class VideoPlayerComponent implements OnInit {

  mediaID: string = "1402726504"; // 1630723954, 2667647842, 1402726504 
  video: any = {
    title: "",
    description: "",
    duration: "",
    key: ""
  }

  @ViewChild('videoPlayer')
  videoPlayer!: ElementRef;
  @ViewChild('canvas')
  canvas!: ElementRef;

  constructor() { }

  ngOnInit() {
  }
}
