import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})

export class LeftNavComponent implements OnInit {

  menuAbierto: boolean = true;

  mobileQuery: MediaQueryList;

  fillerNav =  [
    'Home',
    'Cotizaciones',
    'Ordenes de impresión',
    'CTP',
    'Tipos de máquinas',
    'Tipos de papel',
    'Clientes',
    'Proveedores',
    'Informes',
    'Tutoriales',
    'Sugerencias'
  ];

  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

 /* ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }*/

  shouldRun = true;

  ngOnInit(): void {
  }

}
