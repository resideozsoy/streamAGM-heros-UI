import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { map, shareReplay } from 'rxjs/operators';
import { VideoPlayerComponent } from '../video-player/video-player.component';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private dialogRef!: MatDialogRef<VideoPlayerComponent>;

  deviceInfoMethod: any;
  deviceInfo: { isMobile: boolean; isTablet: boolean; isDesktopDevice: boolean; } | undefined;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.deviceInfoMethod = this.deviceService.getDeviceInfo();

    this.deviceInfo = {
      isMobile: this.deviceService.isMobile(),
      isTablet: this.deviceService.isTablet(),
      isDesktopDevice: this.deviceService.isDesktop()
    }
  }

  openWatchVideoDialog() {
    this.dialogRef = this.dialog.open(VideoPlayerComponent, {
      width: 'auto',
      height: 'auto'
    });
  }
}
