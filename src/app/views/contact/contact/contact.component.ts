import { Component } from '@angular/core';
import { ContactModel } from 'src/app/utils/classes/contact-model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  newContact: ContactModel = new ContactModel('', '', '');

  onSubmit() {
    console.log(`Submitted contact ${JSON.stringify(this.newContact)}`);
    this.newContact = new ContactModel('', '', '')
  }
}
