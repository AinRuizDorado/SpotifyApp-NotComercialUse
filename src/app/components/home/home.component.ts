import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  countries: any[] = [];

  
  constructor(private http: HttpClient, private spotify: SpotifyService) {

    console.log("Constructor done");
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe((data: any) => {
        this.countries = data;
        console.log(data);

      });

  }

  ngOnInit() {
  }

}
