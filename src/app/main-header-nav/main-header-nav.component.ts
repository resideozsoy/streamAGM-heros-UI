import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-main-header-nav',
  templateUrl: './main-header-nav.component.html',
  styleUrls: ['./main-header-nav.component.scss'],
  //encapsulation: ViewEncapsulation.None 
})
export class MainHeaderNavComponent {
  private dialogRef!: MatDialogRef<LoginComponent>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog) { }

  onToggleSideNav() {
    console.log('onToggleSideNav');
  }

  openLoginDialog() {
    const dialogConfig = {
      width: '388px',
      height: '544px',
      panelClass: 'app-full-bleed-dialog',
      disableClose: false,
      autoFocus: true
    };

    this.dialogRef = this.dialog.open(LoginComponent, dialogConfig);

    this.dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}


