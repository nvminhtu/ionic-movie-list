import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MovieService } from 'src/app/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  movie = null;
  imageBaseUrl = environment.images;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieDetails(id).subscribe((res) => {
      this.movie = res;
    });
  }

  openHomePage(url) {
    window.open(url, '_blank');
  }
}
