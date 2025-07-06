import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicFormComponentComponent } from '../dynamic-form-component/dynamic-form-component.component';
import { FormStateServiceService } from '../../service/FormStateService/form-state-service.service';

@Component({
  selector: 'app-form-tabs-component',
  standalone: true,
  imports: [DynamicFormComponentComponent],
  templateUrl: './form-tabs-component.component.html',
  styleUrl: './form-tabs-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormTabsComponentComponent {

    activeTab = 'A';

  formASchema = [
    { type: 'text', label: 'Full Name', name: 'fullName', required: true },
    { type: 'email', label: 'Email', name: 'email' },
    { type: 'checkbox', label: 'Subscribe', name: 'subscribe' }
  ];

  formBSchema = [
    { type: 'text', label: 'Username', name: 'username', required: true },
    { type: 'password', label: 'Password', name: 'password', required: true },
    { type: 'checkbox', label: 'Remember Me', name: 'remember' }
  ];

  constructor(private formStateService: FormStateServiceService) {}

  get activeSchema() {
    return this.activeTab === 'A' ? this.formASchema : this.formBSchema;
  }

  get formData() {
    return this.formStateService.getFormState(this.activeTab);
  }

  onFormSubmit(formValue: any) {
    this.formStateService.setFormState(this.activeTab, formValue);
    alert(`Form ${this.activeTab} submitted!`);
  }

  switchTab(tab: 'A' | 'B') {
    this.activeTab = tab;
  }
}
