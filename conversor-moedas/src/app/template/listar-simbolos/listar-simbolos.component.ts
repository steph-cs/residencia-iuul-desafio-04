import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IMoedas } from 'src/app/interface/IMoedas';

import { ApiConversaoMoedasService } from 'src/app/service/conversaoMoedas/api-conversao-moedas.service';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-listar-simbolos',
  templateUrl: './listar-simbolos.component.html',
  styleUrls: ['./listar-simbolos.component.css']
})
export class ListarSimbolosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['code', 'description'];

  @ViewChild(MatPaginator, { static: true }) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;

  simbolos: IMoedas[] = [];
  dataSource: MatTableDataSource<IMoedas> = new MatTableDataSource(this.simbolos);

  constructor(private api: ApiConversaoMoedasService) {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; 
  }

  ngOnInit() {
    this.api.getSimbolos()
      .subscribe(response => {
        this.simbolos = Object.values(response.symbols)
        this.dataSource.data = this.simbolos;

      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
