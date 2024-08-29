import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-feature-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-a.component.html',
  styleUrls: ['./feature-a.component.scss']
})
export class FeatureAComponent {

}
