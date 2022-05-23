import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.css']
})
export class ChessboardComponent implements OnInit {

  private prevRow: number | undefined;
  private prevCol: number | undefined;

  constructor() {}

  clickedKnight(x: number, y: number): void {
    if (this.prevRow != null && this.prevCol != null) {
      console.log("Resetting board!");
      
      this.resetBoard(this.prevRow, this.prevCol);
    }
    this.prevRow = x;
    this.prevCol = y;
    var Id0 = (x).toString() + (y).toString();
    const element1 = document.getElementById(Id0);
    if (element1) {
      element1.style.background = "red";

      if (x + 2 >= 0 && y + 1 >= 0 && x + 2 < 8 && y + 1 < 8) {
        var Id1 = (x + 2).toString() + (y + 1).toString();
        let element = document.getElementById(Id1);
        if (element) {
          element.style.background = "rgb(81, 52, 121)";
        }
      }

      if (x + 2 >= 0 && y - 1 >= 0 && x + 2 < 8 && y - 1 < 8) {
        var Id8 = (x + 2).toString() + (y - 1).toString();
        let element = document.getElementById(Id8);
        if (element) {
          element.style.background = "rgb(81, 52, 121)";
        }
      }

      if (x - 2 >= 0 && y + 1 >= 0 && x - 2 < 8 && y + 1 < 8) {
        var Id4 = (x - 2).toString() + (y + 1).toString();
        let element = document.getElementById(Id4);
        if (element) {
          element.style.background = "rgb(81, 52, 121)";
        }
      }

      if (x - 2 >= 0 && y - 1 >= 0 && x - 2 < 8 && y - 1 < 8) {
        var Id5 = (x - 2).toString() + (y - 1).toString();
        let element = document.getElementById(Id5);
        if (element) {
          element.style.background = "rgb(81, 52, 121)";
        }
      }

      if (x + 1 >= 0 && y + 2 >= 0 && x + 1 < 8 && y + 2 < 8) {
        var Id2 = (x + 1).toString() + (y + 2).toString();
        let element = document.getElementById(Id2);
        if (element) {
          element.style.background = "rgb(81, 52, 121)";
        }
      }

      if (x - 1 >= 0 && y + 2 >= 0 && x - 1 < 8 && y + 2 < 8) {
        var Id3 = (x - 1).toString() + (y + 2).toString();
        let element = document.getElementById(Id3);
        if (element) {
          element.style.background = "rgb(81, 52, 121)";
        }
      }

      if (x - 1 >= 0 && y - 2 >= 0 && x - 1 < 8 && y - 2 < 8) {
        var Id6 = (x - 1).toString() + (y - 2).toString();
        let element = document.getElementById(Id6);
        if (element) {
          element.style.background = "rgb(81, 52, 121)";
        }
      }

      if (x + 1 >= 0 && y - 2 >= 0 && x + 1 < 8 && y - 2 < 8) {
        var Id7 = (x + 1).toString() + (y - 2).toString();
        let element = document.getElementById(Id7);
        if (element) {
          element.style.background = "rgb(81, 52, 121)";
        }
      }
    }
  }

  resetBoard(x: number, y: number): void {
    console.log("Resetting the board!");
    
    var Id0 = (x).toString() + (y).toString();
    const element1 = document.getElementById(Id0);
    if (element1) {
      element1.style.background = this.getClassName(x, y);

      if (x + 2 >= 0 && y + 1 >= 0 && x + 2 < 8 && y + 1 < 8) {
        var Id1 = (x + 2).toString() + (y + 1).toString();
        let element = document.getElementById(Id1);
        if (element) {
          element.style.background = this.getClassName(x + 2, y + 1);
        }
      }

      if (x + 1 >= 0 && y + 2 >= 0 && x + 1 < 8 && y + 2 < 8) {
        var Id2 = (x + 1).toString() + (y + 2).toString();
        let element = document.getElementById(Id2);
        if (element) {
          element.style.background = this.getClassName(x + 1, y + 2);
        }
      }

      if (x - 1 >= 0 && y + 2 >= 0 && x - 1 < 8 && y + 2 < 8) {
        var Id3 = (x - 1).toString() + (y + 2).toString();
        let element = document.getElementById(Id3);
        if (element) {
          element.style.background = this.getClassName(x - 1, y + 2);
        }
      }

      if (x - 2 >= 0 && y + 1 >= 0 && x - 2 < 8 && y + 1 < 8) {
        var Id4 = (x - 2).toString() + (y + 1).toString();
        let element = document.getElementById(Id4);
        if (element) {
          element.style.background = this.getClassName(x - 2, y + 1);
        }
      }

      if (x - 2 >= 0 && y - 1 >= 0 && x - 2 < 8 && y - 1 < 8) {
        var Id5 = (x - 2).toString() + (y - 1).toString();
        let element = document.getElementById(Id5);
        if (element) {
          element.style.background = this.getClassName(x - 2, y - 1);
        }
      }

      if (x - 1 >= 0 && y - 2 >= 0 && x - 1 < 8 && y - 2 < 8) {
        var Id6 = (x - 1).toString() + (y - 2).toString();
        let element = document.getElementById(Id6);
        if (element) {
          element.style.background = this.getClassName(x - 1, y - 2);
        }
      }

      if (x + 1 >= 0 && y - 2 >= 0 && x + 1 < 8 && y - 2 < 8) {
        var Id7 = (x + 1).toString() + (y - 2).toString();
        let element = document.getElementById(Id7);
        if (element) {
          element.style.background = this.getClassName(x + 1, y - 2);
        }
      }

      if (x + 2 >= 0 && y - 1 >= 0 && x + 2 < 8 && y - 1 < 8) {
        var Id8 = (x + 2).toString() + (y - 1).toString();
        let element = document.getElementById(Id8);
        if (element) {
          element.style.background = this.getClassName(x + 2, y - 1);
        }
      }
    }
  }

  getClassName(x: number, y: number): string {
    if ((x + y) % 2 === 0) {
      return "white";
    }
    return "black";
  }
  ngOnInit(): void {}

}
