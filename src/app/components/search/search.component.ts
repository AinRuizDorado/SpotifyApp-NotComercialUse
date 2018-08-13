import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  artists: any[] = [];
  tracks: any[] = [];


  constructor(private spotify : SpotifyService) {

  }
  
  buscar(query) {
    this.spotify.getSearchArtist(query)
    .subscribe((data:any) => {
      console.log(data.artists.items);
      this.artists = data.artists.items;
    });
    this.spotify.getSearchTrack(query)
    .subscribe((dataq:any) => {
      console.log(dataq.tracks.items);
      this.tracks = dataq.tracks.items;
    })
  }

}
