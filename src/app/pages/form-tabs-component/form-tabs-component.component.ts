import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicFormComponentComponent } from '../dynamic-form-component/dynamic-form-component.component';
import { FormStateServiceService } from '../../service/FormStateService/form-state-service.service';
import { ToastComponent } from '../../common-component/toast/toast.component';
import { CommonModule } from '@angular/common';
import { DynamicFormField } from '../../model/dynamic-form-field';

@Component({
  selector: 'app-form-tabs-component',
  standalone: true,
  imports: [DynamicFormComponentComponent, ToastComponent, CommonModule],
  templateUrl: './form-tabs-component.component.html',
  styleUrl: './form-tabs-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormTabsComponentComponent {
  activeTab = 'A';

  formASchema: DynamicFormField[] = [
    { type: 'text', label: 'Full Name', name: 'fullName', required: true },
    { type: 'email', label: 'Email', name: 'email' },
    { type: 'checkbox', label: 'Subscribe', name: 'subscribe' },
  ];

  formBSchema :DynamicFormField[] = [
    { type: 'text', label: 'Username', name: 'username', required: true },
    { type: 'password', label: 'Password', name: 'password', required: true },
    { type: 'checkbox', label: 'Remember Me', name: 'remember' },
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
    this.triggerToast(
      `Form ${this.activeTab} submitted successfully!`,
      'success'
    );
  }

  switchTab(tab: 'A' | 'B') {
    this.activeTab = tab;
  }

  toastMessage = '';
  toastType: 'success' | 'danger' | 'info' | 'warning' = 'success';
  showToast = false;

  triggerToast(
    message: string,
    type: 'success' | 'danger' | 'info' | 'warning'
  ) {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 2000);
  }
}
