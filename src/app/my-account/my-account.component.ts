import { Component, OnInit, ViewChild, HostListener  } from '@angular/core';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  mode: MatDrawerMode = 'side';
  hasBackdrop ={value:true};
  title = 'my profile';


  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }

  opened = true;
  @ViewChild('sidenav', { static: true })
  sidenav!: MatSidenav;

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    )
    .subscribe(() => {

      var rt = this.getChild(this.activatedRoute)

      rt.data.subscribe((data: any) => {
        console.log(data);
        this.title = data.title})
    })
   
  }

  getChild(activatedRoute: ActivatedRoute):ActivatedRoute {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
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
