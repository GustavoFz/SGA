import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.page.html',
  styleUrls: ['./cadastro-cliente.page.scss']
})
export class CadastroClientePage implements OnInit {
  clienteForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.clienteForm = this.formBuilder.group({
      cnpj: ['', [Validators.required]],
      nome: ['', [Validators.required, Validators.minLength(6)]],
      razaoSocial: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      cep: ['', [Validators.required]]
    });
  }

  public onSubmit(): void {
    console.log(this.clienteForm);
  }
}
