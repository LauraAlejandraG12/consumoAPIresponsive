import { Component, Input } from '@angular/core';
import { Episodes } from '../../interface/episodes';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss']
})
export class EpisodeListComponent {
    @Input() episode: Episodes;
}
