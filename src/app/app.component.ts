import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from "./MyComponents/checkbox/checkbox.component";
import { RadioButtonComponent } from "./MyComponents/radio-button/radio-button.component";
import { DropDownListComponent } from "./MyComponents/drop-down-list/drop-down-list.component";
import { InputComponent } from "./MyComponents/input/input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CheckboxComponent, RadioButtonComponent, DropDownListComponent, InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-material-demo';
}
