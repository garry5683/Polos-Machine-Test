import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-another-component',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './another-component.component.html',
  styleUrl: './another-component.component.scss'
})
export class AnotherComponentComponent {

  vaccinationForm: FormGroup;
  initialVaaccinationLength = 0;

  vaccinationData = [
    { name: 'Apple', quantity: 10 },
    { name: 'Banana', quantity: 5 },
    { name: 'Orange', quantity: 7 }
  ];

  constructor(private fb: FormBuilder) {
    this.vaccinationForm = this.fb.group({
      vaccinations: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.vaccinationData.forEach(fruit => {
      this.vaccinations.push(this.createFruitGroup(fruit.name, fruit.quantity));
    });

    this.initialVaaccinationLength = this.vaccinationData.length;
  }

  get vaccinations(): FormArray {
    return this.vaccinationForm.get('vaccinations') as FormArray;
  }

  createFruitGroup(name: string = '', quantity: number = 0): FormGroup {
    return this.fb.group({
      name: [name],
      quantity: [quantity]
    });
  }

  addVaccination(): void {
    this.vaccinations.push(this.createFruitGroup()); // name will be editable by default
  }

  removeVaccination(index: number): void {
    this.vaccinations.removeAt(index);
  }

  onSubmit(): void {
    console.log(this.vaccinationForm.value);
  }}
