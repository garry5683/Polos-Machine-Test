import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-component',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ],
  templateUrl: './dynamic-form-component.component.html',
  styleUrl: './dynamic-form-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormComponentComponent {

  @Input() schema: any[] = []; // for the scheme of Form A and Form B
  @Input() initialData: any = {}; // for setting already saved data 
  @Output() formSubmit = new EventEmitter<any>(); 

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['schema'] && changes['schema'].currentValue) {
      this.buildForm(); 
    } else if (changes['initialData'] && this.form) {
      this.form.patchValue(this.initialData); 
    }
  }


  buildForm(): void {
    const group: { [key: string]: any } = {};
    this.schema.forEach(field => {
      const validators = [];
      if (field.required) validators.push(Validators.required);
      if (field.type === 'email') validators.push(Validators.email);
      group[field.name] = [this.initialData[field.name] || '', validators];
    });
    this.form = this.fb.group(group);
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

}
