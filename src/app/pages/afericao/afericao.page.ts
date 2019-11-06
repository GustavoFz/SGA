import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-afericao',
  templateUrl: './afericao.page.html',
  styleUrls: ['./afericao.page.scss']
})
export class AfericaoPage implements OnInit {
  afericaoForm: FormGroup;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private formBuilder: FormBuilder) {}

  @ViewChild('mySlider', { static: true }) slides: IonSlides;

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.afericaoForm = this.formBuilder.group({
      cnpj: ['', [Validators.required]],
      nome: ['', [Validators.required]]
    });
  }

  nextSlide() {
    this.slides.slideNext();
  }

  onSubmit() {
    console.log(this.afericaoForm.value);
  }
}
