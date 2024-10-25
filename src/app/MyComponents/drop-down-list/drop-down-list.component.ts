import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-drop-down-list',
  standalone: true,
  imports: [MatSelectModule, FormsModule, CommonModule],
  templateUrl: './drop-down-list.component.html',
  styleUrl: './drop-down-list.component.css'
})
export class DropDownListComponent {
  colors = [
    { id: 1, name: "Red" },
    { id: 2, name: "Green" },
    { id: 3, name: "Blue" },
  ]

  color = 3
}
