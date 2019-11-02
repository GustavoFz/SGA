import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FerramentaService } from 'src/app/services/ferramenta.service';
import { OverlayService } from 'src/app/services/overlay.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ferramenta } from 'src/app/interfaces/ferramenta';

@Component({
  selector: 'app-cadastro-ferramenta',
  templateUrl: './cadastro-ferramenta.page.html',
  styleUrls: ['./cadastro-ferramenta.page.scss']
})
export class CadastroFerramentaPage implements OnInit, OnDestroy {
  ferramentaForm: FormGroup;
  private ferramentaId: string = null;
  public ferramenta: Ferramenta = {};
  private ferramentaSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private ferramentaService: FerramentaService,
    private overlayService: OverlayService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.ferramentaId = this.activatedRoute.snapshot.params.id;

    if (this.ferramentaId) {
      this.loadFerramenta();
    }
  }

  ngOnInit() {
    this.createForm();
  }

  ngOnDestroy() {
    if (this.ferramentaSubscription) {
      this.ferramentaSubscription.unsubscribe();
    }
  }

  loadFerramenta() {
    this.ferramentaSubscription = this.ferramentaService.getFerramenta(this.ferramentaId).subscribe(data => {
      this.ferramenta = data;
      this.ferramentaForm.setValue({ ...data });
    });
  }

  private createForm(): void {
    this.ferramentaForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      codCertificacao: ['', [Validators.required]],
      peso: ['', [Validators.required]]
    });
  }

  async onSubmit() {
    console.log(this.ferramentaForm.value);
    const loading = await this.overlayService.loading();

    this.ferramenta = this.ferramentaForm.value;

    try {
      if (this.ferramentaId) {
        await this.ferramentaService.updateFerramenta(this.ferramentaId, this.ferramenta);
        console.log('ATUALIZOU FERRAMENTA');
      } else {
        this.ferramenta.createdAt = new Date();
        await this.ferramentaService.addFerramenta(this.ferramenta);
        console.log('CRIOU FERRAMENTA');
      }
    } catch (e) {
      this.overlayService.alert({ message: 'Erro ao salvar ferramenta' });
    } finally {
      loading.dismiss();
    }
  }
}
