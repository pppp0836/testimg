import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  curScore: string = '';
  tinyKey: string[] = ['0','1','2','3','4','5','6','DEL'];
  selectedIndex: number;

  constructor() {
  }

    handleZoomEvent($event: any) {
      console.log($event)
    }

    onImgDidLoad() {

    }

  doScore(sc: any, i: number) {
    console.log('do score');
    // console.log('cur:' + sc);
    this.selectedIndex = i;
    if (sc === '') {
      return;
    }
    if (sc === 'DEL') {
      this.erase();
      return;
    }

      if (sc === '.' && this.curScore.indexOf('.') > -1) {
        return;
      }

      const curAddScore = +((this.curScore === '0' ? '' : this.curScore) + sc);


        this.curScore = (this.curScore === '0' ? '' : this.curScore) + sc;

        // this.autoTimer$.next(true);

  }

  private erase() {
    this.curScore = '';//this.curScore.slice(0, -1);
  }
}
