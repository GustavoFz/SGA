import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OverlayService } from 'src/app/services/overlay.service';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/interfaces/cliente';
import { AuthService } from 'src/app/services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.page.html',
  styleUrls: ['./cadastro-cliente.page.scss']
})
export class CadastroClientePage implements OnInit, OnDestroy {
  private clienteId: string = null;
  clienteForm: FormGroup;
  public cliente: Cliente = {};
  private clienteSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private overlayService: OverlayService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
  ) {
    this.clienteId = this.activatedRoute.snapshot.params.id;

    if (this.clienteId) {
      this.loadCliente();
    }
  }

  ngOnInit() {
    this.createForm();
  }

  ngOnDestroy() {
    if (this.clienteSubscription) {
      this.clienteSubscription.unsubscribe();
    }
  }

  loadCliente() {
    this.clienteSubscription = this.clienteService.getCliente(this.clienteId).subscribe(data => {
      this.cliente = data;
      this.clienteForm.setValue({...data});
    });
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

  async onSubmit() {
    console.log(this.clienteForm.value);
    const loading = await this.overlayService.loading();

    this.cliente = this.clienteForm.value;

    try {
      if (this.clienteId) {
        await this.clienteService.updateCliente(this.clienteId, this.cliente);
        this.overlayService.toast({message: 'Cliente atualizado com sucesso.'});
      } else {
        this.cliente.createdAt = new Date();
        await this.clienteService.addCliente(this.cliente);
        this.overlayService.toast({message: 'Cliente criado com sucesso.'});
      }
    } catch (e) {
      this.overlayService.alert({ message: 'Erro ao salvar cliente', buttons: ['Ok'] });
    } finally {
      loading.dismiss();
    }
  }
}
