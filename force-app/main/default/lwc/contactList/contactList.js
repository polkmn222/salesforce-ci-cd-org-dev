import { LightningElement, wire } from 'lwc';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import getContacts from '@salesforce/apex/ContactController.getContacts';
// import { reduceErrors } from '../ldsUtils/ldsUtils';
// import { reduceErrors } from '../ldsUtils/ldsUtils';
// import { reduceErrors } from 'c/ldsUtils';
// import { reduceErrors } from '../ldsUtils/ldsUtils';
import { reduceErrors } from 'c/ldsUtils';
const COLUMNS = [
    { label: 'First Name', fieldName: FIRSTNAME_FIELD.FirstName, type: 'text' },
    { label: 'Last Name', fieldName: LASTNAME_FIELD.LastName, type: 'text' },
    { label: 'Email', fieldName: EMAIL_FIELD.Email, type: 'text' }
];
export default class ContactList extends LightningElement {
    columns = COLUMNS;
    @wire(getContacts)
    contacts;

    get errors() {
        return (this.accounts.error) ?
            reduceErrors(this.accounts.error) : [];
    }

}