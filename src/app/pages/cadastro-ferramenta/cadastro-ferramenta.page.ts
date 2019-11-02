import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-ferramenta',
  templateUrl: './cadastro-ferramenta.page.html',
  styleUrls: ['./cadastro-ferramenta.page.scss']
})
export class CadastroFerramentaPage implements OnInit {
  ferramentaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.ferramentaForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      codCertificacao: ['', [Validators.required]],
      peso: ['', [Validators.required]]
    });
  }

  public onSubmit(): void {
    console.log(this.ferramentaForm);
  }
}
