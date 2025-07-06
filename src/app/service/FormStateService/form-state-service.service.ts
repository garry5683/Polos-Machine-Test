import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormStateServiceService {

  constructor() { }
  private storageKey = 'formStates';

  private state: { [key: string]: any } = this.loadFromLocalStorage();

  setFormState(tabId: string, data: any): void {
    this.state[tabId] = data;
    this.saveToLocalStorage();
  }

  getFormState(tabId: string): any {
    return this.state[tabId] || {};
  }

  private saveToLocalStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.state));
  }

  private loadFromLocalStorage(): { [key: string]: any } {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : {};
  }


}
