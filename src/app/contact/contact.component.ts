import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnChanges {
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

  disableButtonClick() {
    if (this.nameInput.invalid || this.emailInput.invalid || this.messageInput.invalid || this.checkboxInput.invalid) this.disableButton = true;
  }

  submitForm() {
    console.log('test');
  }

  ngOnChanges() {
    console.log(this.formData.name);
    console.log('Hallo');
  }
}
