import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [MatCheckboxModule, CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
})
export class CheckboxComponent {
  isChecked = true;
  
  onChange($event: MatCheckboxChange) {
    console.log(event);
  }
}
