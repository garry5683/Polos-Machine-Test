import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-multi-level-dropdown',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './multi-level-dropdown.component.html',
  styleUrl: './multi-level-dropdown.component.scss'
})
export class MultiLevelDropdownComponent {

regionControl = new FormControl('');

countryList = [
  {
    name: 'India',
    states: [
      { name: 'Kerala' },
      { name: 'Karnataka' },
    ]
  },
  {
    name: 'USA',
    states: [
      { name: 'California' },
      { name: 'Texas' },
    ]
  }
];

onSelect(event: any) {
  const value = event.target.value;
  console.log(this.regionControl.value)
  if (value) {
    const parts = value.split(' > ');

    console.log('Country:', parts[0]);
    console.log('State:', parts[1]);
  } else {

  }
}

}