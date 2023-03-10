import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './template/navbar/navbar.component';
import { FooterComponent } from './template/footer/footer.component';
import { PaginaInicialComponent } from './template/pagina-inicial/pagina-inicial.component';
import { ListarSimbolosComponent } from './template/listar-simbolos/listar-simbolos.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import { FormsModule } from '@angular/forms';
import { ConversaoMoedasComponent } from './template/conversao-moedas/conversao-moedas.component';
import { HistoricoConversaoComponent } from './template/historico-conversao/historico-conversao.component';

import { ModalExcluirHistoricoComponent } from './template/historico-conversao/modal-excluir-historico/modal-excluir-historico.component';
import { ModalExcluirConversaoComponent } from './template/historico-conversao/modal-excluir-conversao/modal-excluir-conversao.component';
import { SnackBarExclusaoComponent } from './template/historico-conversao/snack-bar-exclusao/snack-bar-exclusao.component';
import { SnackBarConversaoComponent } from './template/conversao-moedas/snack-bar-conversao/snack-bar-conversao.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PaginaInicialComponent,
    ListarSimbolosComponent,
    ConversaoMoedasComponent,
    HistoricoConversaoComponent,
    ModalExcluirHistoricoComponent,
    ModalExcluirConversaoComponent,
    SnackBarExclusaoComponent,
    SnackBarConversaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    FormsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
