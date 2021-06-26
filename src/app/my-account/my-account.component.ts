import { Component, OnInit, ViewChild, HostListener  } from '@angular/core';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  mode: MatDrawerMode = 'side';
  hasBackdrop ={value:true};


  constructor() { }

  opened = true;
  @ViewChild('sidenav', { static: true })
  sidenav!: MatSidenav;

  ngOnInit() {
   
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    // if (event.target.innerWidth < 768) {
    //   this.sidenav.fixedTopGap = 55;
    //   this.opened = false;
    // } else {
    //   this.sidenav.fixedTopGap = 55
    //   this.opened = true;
    // }
  }

  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }
}
