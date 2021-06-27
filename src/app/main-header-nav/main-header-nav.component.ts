import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from '../login.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-main-header-nav',
  templateUrl: './main-header-nav.component.html',
  styleUrls: ['./main-header-nav.component.scss']
})
export class MainHeaderNavComponent {
  private dialogRef!: MatDialogRef<LoginComponent>;
  public loggedIn = false;

  constructor(private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.loggedIn.subscribe(value => this.loggedIn = value);
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

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

  logout () {
    this.loginService.logout();
  }

  close(): void {
    this.dialogRef.close();
  }
}


