import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-format-converter',
  templateUrl: './format-converter.component.html',
  styleUrls: ['./format-converter.component.scss']
})
export class FormatConverterComponent implements OnInit {
  fileToUpload: File;
  formatConversionForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formatConversionForm = this.formBuilder.group({
      file: '',
      data_type: 'dna',
      input_format: '',
      output_format: ''
    });
  }

  handleInputFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.fileToUpload = event.target.files[0];
    }
  }

  formatConversion() {
    const formData = new FormData();
    formData.append('file', this.fileToUpload);
    formData.append('data_type', this.formatConversionForm.controls.data_type.value);
    formData.append('input_format', this.formatConversionForm.controls.input_format.value);
    formData.append('output_format', this.formatConversionForm.controls.output_format.value);
    // console.log(formData.get('data_type'));
  }

}
