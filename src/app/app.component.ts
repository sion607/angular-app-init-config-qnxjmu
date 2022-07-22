import { Component } from '@angular/core';
import { ConfigurationService } from './services/configuration.service';

const gist = 'https://gist.githubusercontent.com/RangerDanger94/028ecfd11f06c9714461f14c3f0c543b/raw/ff4dbb390cced0a5a522eeb095041fcfac8711b5/settings.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Hello World!';

  constructor(private configService: ConfigurationService) {
    console.log('AppComponent Constructor: ', JSON.stringify(this.configService.configuration));
    this.name = configService.configuration.appName;

  }
}
