import { Component, Input } from '@angular/core';
import { Cast } from '../../interface/cast';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrl: './cast.component.scss'
})
export class CastComponent {
    @Input() cast: Cast[] = [];
}
