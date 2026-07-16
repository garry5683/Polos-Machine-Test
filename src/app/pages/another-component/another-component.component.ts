import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormArray,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-another-component',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './another-component.component.html',
  styleUrl: './another-component.component.scss',
})
export class AnotherComponentComponent {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
