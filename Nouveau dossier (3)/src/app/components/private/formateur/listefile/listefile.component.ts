import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-listefile',
  templateUrl: './listefile.component.html',
  styleUrls: ['./listefile.component.css']
})
export class ListefileComponent implements OnInit {
  fileInfos: any;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
  }

}
