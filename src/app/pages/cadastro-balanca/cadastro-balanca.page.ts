import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-balanca',
  templateUrl: './cadastro-balanca.page.html',
  styleUrls: ['./cadastro-balanca.page.scss']
})
export class CadastroBalancaPage implements OnInit {
  balancaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.balancaForm = this.formBuilder.group({
      modelo: ['', [Validators.required]],
      fabricante: ['', [Validators.required]],
      cargaMaxima: ['', [Validators.required]]
    });
  }

  public onSubmit(): void {
    console.log(this.balancaForm);
  }
}
