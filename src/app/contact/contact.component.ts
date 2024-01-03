import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ProgressSpinnerMode, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
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
    console.log(fd);

    this.messageLoading = true;
    this.hideButton = true;
    await fetch('https://portfolio.tobias-ruhmanseder.com/send_mail.php'),
    {
      method: 'POST',
      body: fd
    }
    this.notificationChange();
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
