import {Component, OnInit} from '@angular/core';
import * as svg from 'save-svg-as-png';

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
  // tree ="(SEQ62:0.1661606,SEQ63:1.997925,(SEQ59:0.8741253,((SEQ52:1.768247,SEQ56:0.7103593):0.4302503,SEQ55:0.7390158):0.899406,(((SEQ45:1.116803,SEQ44:0.4828632):0.3811023,SEQ48:0.5987513):0.6290859,SEQ41:2.474199,(SEQ40:0.6568392,(SEQ37:0.3804496,SEQ38:1.317509):0.5216154):0.7279741,((SEQ125:0.8645228,(SEQ118:0.6104883,(SEQ115:0.9587053,SEQ116:0.7849769):0.9826051):0.8377183):0.302855,SEQ122:0.7632705):1.071607,SEQ123:3.484421,SEQ119:2.934331,((SEQ77:1.24339,(SEQ79:0.4818331,SEQ80:0.4446161):0.5121906):0.2341909,(SEQ69:1.309472,SEQ73:0.9255321):0.5892236):0.4382497,SEQ76:2.013255,SEQ94:2.937748,(SEQ85:1.996606,(SEQ87:0.7506312,SEQ84:0.8998668):0.644757):0.5278071,(SEQ91:0.4247801,SEQ92:1.356658):2.01631,((SEQ28:1.092244,SEQ29:0.2923511):1.278406,SEQ22:1.686984):0.6285195,(SEQ24:1.047474,SEQ25:2.123456):1.122925,SEQ6:2.322726,(SEQ10:0.839624,SEQ7:1.017838):0.6918397,(SEQ17:0.4996546,(SEQ13:0.2023463,SEQ14:1.850393):1.337486):1.245647,SEQ104:1.270836,(SEQ103:0.9079436,(SEQ100:0.2938735,SEQ101:0.3308275):0.2781275,SEQ108:0.9277168):1.285547,(SEQ110:0.3575722,SEQ111:0.2154448):2.5728):1.835704):1.417468)";
  tree = '(Spider:0.01181075,Woolly:0.02031041,(Howler:0.03929854,((Squirrel:0.05077519,((Titi:0.02039065,Saki:0.02150579)0.995000:0.01178676,(Owl:0.03086005,(PMarmoset:0.01874844,Tamarin:0.01911211)0.999000:0.01469246)0.647000:0.00280859)0.126000:0.00111146)0.000000:0.00000997,((Colobus:0.00277898,(DLangur:0.00480540,(Patas:0.01109996,((AGM_cDNA:0.00134656,Tant_cDNA:0.00134020)0.967000:0.00518035,(Rhes_cDNA:0.00599868,Baboon:0.00314482)0.947000:0.00414017)0.534000:0.00253701)0.999000:0.01241501)0.047000:0.00124937)1.000000:0.03072921,((Gorilla:0.00553042,(Human:0.00670980,Chimp:0.00209986)0.835000:0.00129494)0.974000:0.00707194,(Orangutan:0.01264025,Gibbon:0.02418947)0.699000:0.00150424)0.966000:0.01309323)1.000000:0.13111410)0.997000:0.01617515)0.968000:0.00854007);'; // Give the tree to our scripts. load_tree.js is the link between the HTML page and the phylotree.js code.
  dis_val = false;
  dis_bl = false;

  // @ViewChild('tree_display') content: ElementRef;

  constructor() {
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
  }

  downloadPNG() {
    console.log('here');
    svg.saveSvgAsPng(document.getElementById('tree_display'), 'diagram.png');
  }
  ngOnInit() {

    treeView(this.tree);
  }

  pattern(event: Event) {
    patternChange(event.srcElement.id);
  }

  layout(event: Event) {
    layoutChange(event['srcElement']['dataset']['mode']);
  }

  direction(event: Event) {
    const direction = event['srcElement']['dataset']['direction'];
    const amount = event['srcElement']['dataset']['amount'];
    directionChange(direction, amount);
  }

  sortOrder(event: Event) {
    sort(event.srcElement.id);
  }

  displayBranchLengths(option: boolean) {
    displayBranchLength(option);
    this.dis_bl = option;
  }

  /** Display(){
    validateTree(text);
  }**/



}
