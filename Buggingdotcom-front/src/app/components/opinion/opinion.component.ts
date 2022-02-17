import {Component, Input, OnInit} from '@angular/core';
import {Opinion} from "../../interfaces/opinion";
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {

  @Input() opinion:Opinion;
  arrayIter:number[];
  faStar = faStar;

  constructor() { }

  ngOnInit(): void {
    this.arrayIter = Array(this.opinion.rate).fill(1);
  }

}
