import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  passwordLength = 0;
  password = '';

  onChangeLength(event: Event) {
    const target = event.target as HTMLInputElement;
    const parsedValue = parseInt(target.value);
    if (!isNaN(parsedValue)) {
      this.passwordLength = parsedValue;
    }
  }
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  onButtonClick() {
    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const idx = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[idx];
    }
    this.password = generatedPassword;
  }
}
