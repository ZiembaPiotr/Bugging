import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Opinion} from "../../interfaces/opinion";
import {OpinionService} from "../../services/opinion.service";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  @Output() onAddOpinion: EventEmitter<Opinion> = new EventEmitter<Opinion>();
  @Input() hotelId:number;
  opinion: string;
  sliderValue: number;

  constructor(private loginService:LoginService,
              private opinionService:OpinionService) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.loginService.currentAdminUser === undefined && this.loginService.currentGuestUser === undefined) {
      alert("You have to be logged!");
      this.opinion = '';
      this.sliderValue = 1;
    } else {
      if (this.loginService.currentAdminUser !== undefined) {
        const newOpinion:Opinion = {
          hotel_id: this.hotelId,
          email: this.loginService.currentAdminUser.email,
          rate: this.sliderValue,
          opinion: this.opinion
        };
        console.log(newOpinion);
        this.addOpinion(newOpinion);

        this.opinion = '';
        this.sliderValue = 1;
      } else {
        const newOpinion:Opinion = {
          hotel_id: this.hotelId,
          email: this.loginService.currentGuestUser.email,
          rate: this.sliderValue,
          opinion: this.opinion
        };
        this.addOpinion(newOpinion);

        this.opinion = '';
        this.sliderValue = 1;
      }
    }
  }

  addOpinion(opinion: Opinion) {
    this.onAddOpinion.emit(opinion);
  }
}
