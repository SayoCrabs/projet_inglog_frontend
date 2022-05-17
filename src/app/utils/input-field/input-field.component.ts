import {Component, Input, OnInit} from '@angular/core';
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  @Input() title: string = "";
  @Input() classForm: MatFormFieldAppearance = 'fill';
  @Input() control: FormControl = new FormControl();
  @Input() type: string = 'text';

  constructor() { }

  ngOnInit(): void {
    this.type = this.getType().toLowerCase();
    console.log(localStorage.getItem('isProUserOrUser'));
  }

  getType(): string
  {
    if(this.title == 'password')
    {
      this.type = 'password';
    }

    switch(this.type)
    {
      case 'Integer': {
        return 'number';
      }
      case 'String': {
        return 'text';
      }
      default:
      {
        return this.type;
      }
    }
  }

}
