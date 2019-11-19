import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TreeGenerationService } from '../tree-generation.service';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import { NgxSpinnerService } from "ngx-spinner";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  fileUploadService: FileUploadService;
  treeGenerationService: TreeGenerationService;
  router: Router;
  fileToUpload: File;
  form: FormGroup;
  recommendForm: FormGroup;
  recommendResponse = {status: undefined, message: undefined, doc_id: undefined, algorithms: undefined};
  uploadResponse = { status: undefined, message: undefined, data: undefined, msa: undefined };
  treeResponse = {status: undefined, tree: undefined, tree_id: undefined};
  methods = ['NJ', 'UPGMA', 'Maximum Parsimony', 'Bayesian', 'Maximum Likelihood'];
  optionalMethods: string[];
  url: any;
  inputData: any;
  image: any;
  spinner1 = 'spinner1'; 
  spinner2 = 'spinner2';


  // constructor
  constructor(private formBuilder: FormBuilder, fileUploadService: FileUploadService,
    treeGenerationService: TreeGenerationService, router: Router, 
    private spinner: NgxSpinnerService) {
    this.router = router;
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
    let recommendResponse  = { status: '', message: 0, algorithms: undefined, doc_id: undefined };
    this.recommendResponse = recommendResponse;
    let uploadResponse = { status: '', message: 0, data: undefined, msa: undefined };
    this.uploadResponse = uploadResponse;
    let treeResponse = { status: '', tree: undefined, tree_id: undefined };
    this.treeResponse = treeResponse;
    this.optionalMethods = [];

  }

  // get the raw dataset
  handleFileInput(files: FileList) {
    if (files.length > 0) {
    this.fileToUpload = files[0];
    }
  }
  handleInputFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.fileToUpload = event.target.files[0];


      const reader1 = new FileReader();
      reader1.readAsText(event.target.files[0]);
      reader1.onload = (_event) => {
        this.inputData = reader1.result;
      };
      const documentDefinition = { content: this.inputData };
      const pdfDocGenerator = pdfMake.createPdf(documentDefinition);

      pdfDocGenerator.getDataUrl((dataUrl) => {
        this.url = dataUrl;
      });


      // const reader = new FileReader();
      // reader.readAsDataURL(pdfMake.createPdf(documentDefinition).); // read file as data url
      // reader.onload = (_event) => {
      //   this.url = reader.result;
      //   console.log(this.url);
      // };
      // const reader1 = new FileReader();
      // reader1.readAsText(event.target.files[0]);
      // reader1.onload = (_event) =>
      // {
      //   this.inputData = reader1.result;
      //   console.log(reader1.result);
      // };

    }
  }

  // send dataset file to server and get progress
  onSubmit() {
    const formData = new FormData();
    formData.append('data', this.fileToUpload);
    this.fileUploadService.postFile(formData).subscribe(res => {
      this.uploadResponse = res;
      this.showSpinner(this.spinner1);
      if (this.uploadResponse.status === 'Created') {
        this.recommend(this.uploadResponse.data);
        this.hideSpinner(this.spinner1);
      }
    }, error => {
      console.log(error);
    });
  }

  downloadMsa() {
    const blob = new Blob([this.uploadResponse.msa], { type: 'text/plain' });
    saveAs(blob, 'aligned_dataset.fasta');
  }

  // obtain recommended algorithhms for the uploaded dataset from server.
  recommend(data_id: string) {
    this.fileUploadService.getRecommendation(data_id).subscribe(res => {
      this.recommendResponse = res;
      this.optionalMethods = this.methods.filter(item => this.recommendResponse.algorithms.indexOf(item) < 0);
    }, error => {
      console.log(error);
    });
  }

  // post the selected algorithm for tree generation and get the newick tree
  onAlgoSelect() {
    this.treeGenerationService.getTree(this.recommendResponse.doc_id,
      this.recommendForm.controls.finalAlgorithm.value)
    .subscribe(res => {
      this.treeResponse = res;
      this.showSpinner(this.spinner2);
      if (this.treeResponse.status === 'Created') {
        this.hideSpinner(this.spinner2);
      }
    }, error => {
      console.log(error);
    });
  }

  // redirect to visualization page with the newick tree
  visualize() {
    this.router.navigate(['/view-tree', {treeString: this.treeResponse.tree, tree_id: this.treeResponse.tree_id}]);
  }

  showSpinner(name: string) {
    this.spinner.show(name);
  }

  hideSpinner(name: string) {
    this.spinner.hide(name);
  }

}
