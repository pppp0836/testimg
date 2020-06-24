import { Component } from '@angular/core';
// import Keyboard from "simple-keyboard";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  curScore: string = '';
  tinyKey: string[] = ['0','1','2','3','4','5','6','DEL'];
  selectedIndex: number;
  private value: string;
  // keyboard: Keyboard;

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

  ngAfterViewInit() {
    // this.keyboard = new Keyboard({
    //
    //   onChange: input => this.onChange(input),
    //   onKeyPress: button => this.onKeyPress(button)
    // });
  }
  // onChange = (input: string) => {
    // this.value = input;
    // console.log("Input changed", input);
  // };

  // onKeyPress = (button: string) => {
  //   console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    // if (button === "{shift}" || button === "{lock}") this.handleShift();
  // };

  // onInputChange = (event: any) => {
  //   this.keyboard.setInput(event.target.value);
  // };
  //
  // handleShift = () => {
  //   let currentLayout = this.keyboard.options.layoutName;
  //   let shiftToggle = currentLayout === "default" ? "shift" : "default";
  //
  //   this.keyboard.setOptions({
  //     layoutName: shiftToggle
  //   });
  // };
}
