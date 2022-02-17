import {Component, Input, OnInit} from '@angular/core';
import {Opinion} from "../../interfaces/opinion";
import {OpinionService} from "../../services/opinion.service";

@Component({
  selector: 'app-opinion-list',
  templateUrl: './opinion-list.component.html',
  styleUrls: ['./opinion-list.component.css']
})
export class OpinionListComponent implements OnInit {

  @Input() hotelId:number;
  @Input() opinions:Opinion[];

  constructor(private opinionService:OpinionService) { }

  ngOnInit(): void {
  }

  addOpinion(opinion: Opinion) {
    this.opinionService.addOpinion(opinion).subscribe((opinion) => this.opinions.push(opinion));
  }
}
