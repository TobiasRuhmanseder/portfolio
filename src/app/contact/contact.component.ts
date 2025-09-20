import { Component, Input, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';

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
  @ViewChild('form') form?: NgForm;
  formData = {
    name: '',
    email: '',
    message: '',
    checkbox: false
  }

  @Input() disableButton: boolean = false;
  @Input() hideButton: boolean = false;
  @Input() messageLoading: boolean = false;
  @Input() messageSent: boolean = false;

  disableButtonClick() {
    if (this.nameInput.invalid || this.emailInput.invalid || this.messageInput.invalid || this.checkboxInput.invalid) this.disableButton = true;
  }

  async submitForm() {
    let fd = new FormData();
    fd.append('name', this.formData.name);
    fd.append('message', this.formData.message);
    fd.append('email', this.formData.email);

    this.messageLoading = true;
    this.hideButton = true;
    await fetch('https://tobias-ruhmanseder.de/send_mail.php',
      {
        method: 'POST',
        body: fd
      })
    this.notificationChange();
    this.disableButton = false;
  }

  notificationChange() {
    setTimeout(() => {
      this.messageLoading = false;
      this.messageSent = true;
      setTimeout(() => {
        this.messageSent = false;
        this.form?.reset();
        setTimeout(() => {
          this.hideButton = false;
        }, 10)
      }, 2000)
    }, 1500)
  }
}
