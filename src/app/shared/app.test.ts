export class TestModule {
    public name: string;
    public caption: string;
    public downloadURL: string; 
  
  constructor(name, caption, downloadURL) {
   this.name = name;
    this.caption = caption;
    this.downloadURL = downloadURL;
  }
} 