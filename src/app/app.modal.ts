
export class Appmodal {
  public email: string;
  public dropSelected: string;
  public password: string;
  public file: File;
  public caption: string;
   
   constructor(email?: string, dropSelected?: string, password?: string, file?: File, caption?: string) {
     this.email = email;
     this.dropSelected = dropSelected;
     this.password = password;
     this.file = file;
     this.caption = caption;
   }
}