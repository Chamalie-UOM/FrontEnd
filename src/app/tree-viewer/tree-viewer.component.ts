import {Component, OnInit} from '@angular/core';

import * as svg from 'save-svg-as-png';

import {saveAs} from 'file-saver';

import {ActivatedRoute} from '@angular/router';
import {ExportToDriveService} from '../export-to-drive.service';

declare function treeView(tree: string): any;

declare function patternChange(pattern: string): any;

declare function layoutChange(pattern: string): any;

declare function directionChange(direction: string, amount: number): any;

declare function displayBranchLength(checked: boolean): any;

declare function sort(order: string): any;

declare function validateTree(text: string): any;

@Component({
  selector: 'app-tree-viewer',
  templateUrl: './tree-viewer.component.html',
  styleUrls: ['./tree-viewer.component.scss']
})
export class TreeViewerComponent implements OnInit {

  // @ViewChild('tree_display') content: ElementRef;

  file_name;
  file: File;
  file_type;
  alert;
  dis_bl;
  modal_class;
  modal_title;
  tree: string;
  tree_id: string;

  constructor(private route: ActivatedRoute, driveService: ExportToDriveService) {
    this.alert = '';
    this.dis_bl = false;
    this.modal_class = 'modal-dialog modal-success';
    this.modal_title = 'Paste your tree in Newick format';
    this.file_name = '_newick_tree';
    this.file_type = '';
    this.driveService = driveService;
  }
  driveService: ExportToDriveService;

  ngOnInit() {
    this.tree = '(Spider:0.01181075,Woolly:0.02031041,(Howler:0.03929854,((Squirrel:0.05077519,((Titi:0.02039065,Saki:0.02150579)0.995000:0.01178676,(Owl:0.03086005,(PMarmoset:0.01874844,Tamarin:0.01911211)0.999000:0.01469246)0.647000:0.00280859)0.126000:0.00111146)0.000000:0.00000997,((Colobus:0.00277898,(DLangur:0.00480540,(Patas:0.01109996,((AGM_cDNA:0.00134656,Tant_cDNA:0.00134020)0.967000:0.00518035,(Rhes_cDNA:0.00599868,Baboon:0.00314482)0.947000:0.00414017)0.534000:0.00253701)0.999000:0.01241501)0.047000:0.00124937)1.000000:0.03072921,((Gorilla:0.00553042,(Human:0.00670980,Chimp:0.00209986)0.835000:0.00129494)0.974000:0.00707194,(Orangutan:0.01264025,Gibbon:0.02418947)0.699000:0.00150424)0.966000:0.01309323)1.000000:0.13111410)0.997000:0.01617515)0.968000:0.00854007);';

    // this.tree = this.route.snapshot.paramMap.get('treeString');
    // this.tree_id = this.route.snapshot.paramMap.get('tree_id');
    treeView(this.tree);
  }

  /**public downloadPDF() {
    const doc = new JsPDF();
    const specialElementHandler = {
      '#editor':  function (element, renderer) {
        return true;
      }
    };
    const content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15 , {
      'width': 190,
      'elementHandlers': specialElementHandler
    });
    doc.save('test.pdf');
  }**/
  downloadNewick() {
    // this.file = new File([this.tree],this.file_name + '.nwk');
    const blob = new Blob([this.tree], { type: 'text/plain' });
    console.log(this.tree);
    saveAs(blob, this.file_name + '.nwk');
  }

  downloadPNG() {
    svg.saveSvgAsPng(document.getElementById('tree_display'), this.file_name + '.png');
  }

  saveToDrive() {
    this.driveService.ExportToDrive(this.tree_id);

  }
  pattern(event: Event) {
    patternChange(event['srcElement']['dataset']['mode']);
  }

  layout(event: Event) {
    console.log(event);
    layoutChange(event['srcElement']['dataset']['mode']);
  }

  direction(event: Event) {
    const direction = event['srcElement']['dataset']['direction'];
    const amount = event['srcElement']['dataset']['amount'];
    directionChange(direction, amount);
  }

  sortOrder(event: Event) {
    sort(event.srcElement['id']);
  }

  displayBranchLengths(option: boolean) {
    displayBranchLength(option);
    this.dis_bl = option;
  }

  DisplayTree() {
    const str: string = (<HTMLInputElement>document.getElementById('tree_text')).value;
    if (str !== null) {
      this.tree = str;
      const response = validateTree(str);
      if (response === null) {
        document.getElementById('close_Modal').click();
        this.modal_class = 'modal-dialog modal-success';
        this.modal_title = 'Paste your tree in Newick format';
      } else {
        console.log('error');
        this.alert = response;
        this.modal_class = 'modal-dialog modal-danger';
        this.modal_title = response;

      }
    }
  }

  handleFileInput(target: EventTarget) {
    const files = target['files'];
    if (files.length > 0) {
      const file = files[0];

      const name_array = file['name'].split('.');
      const size = name_array.length;
      const type = name_array[size - 1];
      if (type === 'tre' || type === 'nwk' || type === 'nw') {
        // console.log(type);
        this.file_name = name_array[0] + this.file_name;
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
          this.tree = (fileReader.result).toString();
          const response = validateTree(this.tree);
          if (response !== null) {
            console.log(response);
          }
        };
        fileReader.readAsText(file);
      }

    }

  }



}
