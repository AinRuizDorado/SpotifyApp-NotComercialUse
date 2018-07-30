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
      'Authorization': 'Bearer BQAqI5CWKZ34TBo_TChpEYZhKY2mn7QpiZn1ufYlFbN20JUXHwi4uhxpoarbx4WLlFVk38YNi0Z8ij4gG54'   
    });
    return this.http.get('https://api.spotify.com/v1/browse/featured-playlists', {headers});

  }
  getSearchArtist( query:string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAqI5CWKZ34TBo_TChpEYZhKY2mn7QpiZn1ufYlFbN20JUXHwi4uhxpoarbx4WLlFVk38YNi0Z8ij4gG54'   
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${query}&type=track%2Cartist&limit=1`, {headers});
  }


}

