import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Show } from '../../interface/show';
import { Episodes } from '../../interface/episodes';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent {
    @Input() show: Show;
}
