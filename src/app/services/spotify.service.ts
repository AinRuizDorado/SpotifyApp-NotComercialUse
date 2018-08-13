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
      'Authorization': 'Bearer BQArMfksK6YmbM_p4MbuK2yz0JMzSDoYNFAwdXQ3eh0rHjhM0CTIjy4yJgVxVOm4CelZdAT0eYOBdmYovR4'   
    });
    return this.http.get('https://api.spotify.com/v1/browse/featured-playlists', {headers});

  }
  getSearchArtist( query:string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQArMfksK6YmbM_p4MbuK2yz0JMzSDoYNFAwdXQ3eh0rHjhM0CTIjy4yJgVxVOm4CelZdAT0eYOBdmYovR4'   
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${query}&type=track%2Cartist&limit=1`, {headers});
  }

  getSearchTrack(query:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQArMfksK6YmbM_p4MbuK2yz0JMzSDoYNFAwdXQ3eh0rHjhM0CTIjy4yJgVxVOm4CelZdAT0eYOBdmYovR4'   
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=3`, {headers});
  }


}

