export class ContactModel {
  public name: string;
  public mail: string;
  public body: string;

  constructor(name: string, mail: string, body: string) {
    this.name = name;
    this.mail = mail;
    this.body = body;
  }
}
