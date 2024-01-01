import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('nameInput') nameInput?: any;
  @ViewChild('emailInput') emailInput?: any;
  @ViewChild('messageInput') messageInput?: any;
  @ViewChild('checkboxInput') checkboxInput?: any;
  formData = {
    name: '',
    email: '',
    message: '',
    checkbox: false
  }
  @Input() disableButton: boolean = false;
  public sendMessage: boolean = false;

  disableButtonClick() {
    if (this.nameInput.invalid || this.emailInput.invalid || this.messageInput.invalid || this.checkboxInput.invalid) this.disableButton = true;
  }

  async submitForm() {
    console.log('test');

    await fetch('https://tobias-ruhmanseder.com/send_mail.php'),
    {
      method:'POST',
      body: this.formData
    }
  }
}
