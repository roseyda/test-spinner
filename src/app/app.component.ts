import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  public launchRestRequests() {
    this.http
      .get('https://www.metaweather.com/api/location/search/?query=s')
      .subscribe();
    this.http
      .get('https://www.metaweather.com/api/location/search/?query=s')
      .subscribe();
    this.http
      .get('https://www.metaweather.com/api/location/search/?query=s')
      .subscribe();
    this.http
      .get('https://www.metaweather.com/api/location/search/?query=s')
      .subscribe();
    this.http
      .get('https://www.metaweather.com/api/location/search/?query=s')
      .subscribe();
    this.http
      .get('https://www.metaweather.com/api/location/search/?query=s')
      .subscribe();
    this.http
      .get('https://www.metaweather.com/api/location/search/?query=s')
      .subscribe();
    this.http
      .get('https://www.metaweather.com/api/location/search/?query=s')
      .subscribe();
    this.http
      .get('https://www.metaweather.com/api/location/search/?query=s')
      .subscribe();
    this.http
      .get('https://www.metaweather.com/api/location/search/?query=s')
      .subscribe();
  }
}
