import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hero';
  deviceInfoMethod: any = null;
  deviceInfo: any = null;

  constructor(
    private deviceService: DeviceDetectorService,
  ) {
    this.getDeviceInfo();
  }

  getDeviceInfo() {
    console.log('hello `Home` component');
    this.deviceInfoMethod = this.deviceService.getDeviceInfo();

    this.deviceInfo = {
      isMobile: this.deviceService.isMobile(),
      isTablet: this.deviceService.isTablet(),
      isDesktopDevice: this.deviceService.isDesktop()
    }

    console.log('device info', this.deviceInfo)
  }
}


