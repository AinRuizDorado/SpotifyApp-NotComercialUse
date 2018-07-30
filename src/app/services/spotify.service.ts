import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  constructor(private http: HttpClient) {
    console.log("spotify service im here!!!!1");

  }

  getNewPlaylist() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC9K0jIyq0TaSLtRzrQsuAB1ZOWg2Ek4EiV6Y6Lydo4ggFT6ZLFFGtCjOAdsRAAKVPyI37YkvwotZKTmf0'   
    });
    return this.http.get('https://api.spotify.com/v1/browse/featured-playlists', {headers});

  }



}

