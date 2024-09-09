import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css'] 
})
export class PasswordGeneratorComponent {
  password: string = 'Click on generate';
  length: number = 4;
  includeUpperCase: boolean = true;
  includeLowercase: boolean = true;
  includeNumbers: boolean = true;
  includeSpecial: boolean = true;
  passwordStrength: number = 0;

  generatepassword() {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';  

    let charSet = lowercaseChars;
    if (this.includeUpperCase) {
      charSet += uppercaseChars;
    }

    if (this.includeNumbers) {
      charSet += numberChars;
    }
    
    if (this.includeSpecial) {
      charSet += specialChars;
    }
    
    this.password = '';
    for (let i = 0; i < this.length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      this.password += charSet[randomIndex];
    }

    this.generateStrength(); 
  }

  generateStrength(): void {
    let strength = 0;
    if (this.includeLowercase) strength++;
    if (this.includeUpperCase) strength++;
    if (this.includeNumbers) strength++;
    if (this.includeSpecial) strength++;
    
    this.passwordStrength = strength;
  }
}
