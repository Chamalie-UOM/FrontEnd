import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TreeGenerationService } from '../tree-generation.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  fileUploadService: FileUploadService;  
  treeGenerationService: TreeGenerationService;
  fileToUpload: File;
  form: FormGroup;
  recommendForm: FormGroup;
  recommendResponse:Object;
  uploadResponse = { status: undefined, message: undefined, data: undefined };
  treeResponse = {status: undefined, tree: undefined};
  

  //constructor 
  constructor(private formBuilder: FormBuilder, fileUploadService:FileUploadService,
    treeGenerationService: TreeGenerationService) { 
    this.fileUploadService = fileUploadService;
    this.treeGenerationService = treeGenerationService;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      file: ['']
    });
    this.recommendForm = this.formBuilder.group({
      finalAlgorithm: ''
    });
    var recommendResponse  = { status: '', message: 0, algorithms: undefined };
    this.recommendResponse = recommendResponse;
    var uploadResponse = { status: '', message: 0, data: undefined };
    this.uploadResponse = uploadResponse;
    var treeResponse = { status: '', tree: undefined };
    this.treeResponse= treeResponse;

  }

  //get the raw dataset
  handleFileInput(files: FileList) {
    if (files.length > 0) {
    this.fileToUpload = files[0];
    }
  }

  //send dataset file to server and get progress 
  onSubmit() {
    const formData = new FormData();
    formData.append('data', this.fileToUpload);
    this.fileUploadService.postFile(formData).subscribe(res => {
      this.uploadResponse = res;
      if(this.uploadResponse.status==="Created"){
        this.recommend(this.uploadResponse.data)
    }
    }, error => {
      console.log(error);
    });
  }

  //obtain recommended algorithhms for the uploaded dataset from server.
  recommend(data_id: string) {
    this.fileUploadService.getRecommendation(data_id).subscribe(res =>{
      this.recommendResponse = res;
    },error => {
      console.log(error);
    });
  } 

  onAlgoSelect() {
    this.treeGenerationService.getTree(this.recommendForm.controls.finalAlgorithm.value)
    .subscribe(res =>{
      this.treeResponse = res;
    },error => {
      console.log(error);
    });
  }

}
