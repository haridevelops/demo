
export class UploadModal {
  public file: File;
  public caption: string;
  public name: string;
   
   constructor(file: File, caption: string, name: string) {
     this.file = file;
     this.caption = caption;
     this.name = name;
   }
  
    
}