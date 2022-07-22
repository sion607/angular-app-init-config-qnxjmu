import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, toPromise } from 'rxjs/operators';

import { AppConfiguration } from '../models/appConfiguration';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  // Get configuration from gist
  private gist = 'https://gist.githubusercontent.com/RangerDanger94/028ecfd11f06c9714461f14c3f0c543b/raw/ff4dbb390cced0a5a522eeb095041fcfac8711b5/settings.json';
  
  // Default configuration
  private _configuration: AppConfiguration = {
    appName: 'Default'
  };
  public get configuration() {
    return this._configuration;
  }
  constructor(private httpClient: HttpClient) { }

  public load(): Promise<AppConfiguration> {
    return this.httpClient.get<AppConfiguration>(this.gist)
      .pipe(
        tap(response => console.log('HTTP Response:', response)),
        tap(response => this._configuration = response)
      ).toPromise();
  }
}