import { Injectable } from '@angular/core';

export const darkTheme = {
  'primary-color': '#fff',
  'background-color': '#0B0C08',
  'text-color': '#fff'
};

export const lightTheme = {
  'primary-color': '#fff',
  'background-color': '#e5e5e5',
  'text-color': '#2d2d2d'
};

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {

  constructor() { }

  ngOnInit() {
    console.log('set dark theme');
    //this.toggleDark();
  }

  // toggleDark() {
  //   this.setTheme(darkTheme);
  // }

  // toggleLight() {
  //   this.setTheme(lightTheme);
  // }

  // private setTheme(theme: any = {}) {
  //   Object.keys(theme).forEach(k =>
  //     document.documentElement.style.setProperty(`--${k}`, theme[k])
  //   );
  // }
}
