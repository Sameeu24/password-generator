import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css'] // Corrected the name from styleUrl to styleUrls
})
export class PasswordGeneratorComponent  {
  password: string = 'Click on generate';
  length: number = 12;
  includeUpperCase: boolean = true;
  includeNumbers: boolean = true;
  includeSpecial: boolean = true;
  
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
  }

}
