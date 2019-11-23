import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ConversionService } from '../conversion.service';
import {saveAs} from 'file-saver';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-format-converter',
  templateUrl: './format-converter.component.html',
  styleUrls: ['./format-converter.component.scss']
})
export class FormatConverterComponent implements OnInit {
  fileToUpload: File;
  formatConversionForm: FormGroup;
  conversionService: ConversionService;
  convertResponse = {status: undefined, out_string: undefined}

  constructor(private formBuilder: FormBuilder, 
    conversionService: ConversionService, private spinner: NgxSpinnerService) {
    this.conversionService = conversionService;
  }

  ngOnInit() {
    this.formatConversionForm = this.formBuilder.group({
      in_file: '',
      data_type: 'dna',
      input_format: '',
      output_format: ''
    });
    const convertResponse = {status: '', out_string:undefined};
    this.convertResponse = convertResponse;
  }

  handleInputFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.fileToUpload = event.target.files[0];
    }
  }

  formatConversion() {
    const formData = new FormData();
    formData.append('in_file', this.fileToUpload);
    formData.append('data_type', this.formatConversionForm.controls.data_type.value);
    formData.append('input_format', this.formatConversionForm.controls.input_format.value);
    formData.append('output_format', this.formatConversionForm.controls.output_format.value);
    // console.log(formData.get('data_type'));
    this.conversionService.convert(formData).subscribe(res => {
      this.convertResponse = res;
      this.spinner.show();
      if (this.convertResponse.status === 'Created') {
        this.spinner.hide();
      }
    }, error => {
      console.log(error);
    });
  }

  downloadOutput() {
    const blob = new Blob([this.convertResponse.out_string], { type: 'text/plain' });
    saveAs(blob, 'converted_dataset');
  }

}
