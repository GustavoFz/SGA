import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BalancaService } from 'src/app/services/balanca.service';
import { OverlayService } from 'src/app/services/overlay.service';
import { ActivatedRoute } from '@angular/router';
import { Balanca } from 'src/app/interfaces/balanca';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cadastro-balanca',
  templateUrl: './cadastro-balanca.page.html',
  styleUrls: ['./cadastro-balanca.page.scss']
})
export class CadastroBalancaPage implements OnInit, OnDestroy {
  balancaForm: FormGroup;
  private balancaId: string = null;
  public balanca: Balanca = {};
  private balancaSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private balancaService: BalancaService,
    private overlayService: OverlayService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.balancaId = this.activatedRoute.snapshot.params.id;

    if (this.balancaId) {
      this.loadBalanca();
    }
  }

  ngOnInit() {
    this.createForm();
  }

  ngOnDestroy() {
    if (this.balancaSubscription) {
      this.balancaSubscription.unsubscribe();
    }
  }

  loadBalanca() {
    this.balancaSubscription = this.balancaService.getBalanca(this.balancaId).subscribe(data => {
      this.balanca = data;
      this.balancaForm.setValue({ ...data });
    });
  }


  private createForm(): void {
    this.balancaForm = this.formBuilder.group({
      modelo: ['', [Validators.required]],
      fabricante: ['', [Validators.required]],
      cargaMaxima: ['', [Validators.required]]
    });
  }

  async onSubmit() {
    console.log(this.balancaForm.value);
    const loading = await this.overlayService.loading();

    this.balanca = this.balancaForm.value;

    try {
      if (this.balancaId) {
        await this.balancaService.updateBalanca(this.balancaId, this.balanca);
        this.overlayService.toast({message: 'Balança atualizada com sucesso.'});
      } else {
        this.balanca.createdAt = new Date();
        await this.balancaService.addBalanca(this.balanca);
        this.overlayService.toast({message: 'Balança criada com sucesso.'});
      }
    } catch (e) {
      this.overlayService.alert({ message: 'Erro ao salvar balanca', buttons: ['Ok'] });
    } finally {
      loading.dismiss();
    }
  }
}
