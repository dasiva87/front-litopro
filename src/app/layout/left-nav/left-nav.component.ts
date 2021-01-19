import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})

export class LeftNavComponent implements OnInit {

  mobileQuery: MediaQueryList;

  fillerNav =  [
    {
      link:    '',
      nombre:  'Home'
    },
    {
      link:'document',
      nombre: 'Cotizaciones'
    },
    {
      link:'#',
      nombre: 'Ordenes de impresión'
    },
    {
      link:'type-ctp',
      nombre: 'CTP'
    },
    {
      link:'type-machine',
      nombre: 'Tipos de máquinas'
    },
    {
      link:'type-machine',
      nombre: 'Tipos de papel'
    },
    {
      link:'#',
      nombre: 'Clientes'
    },
    {
      link:'#',
      nombre: 'Cotizaciones'
    },
    {
      link:'#',
      nombre: 'Proveedores'
    }/*,
    {
      link:'document',
      nombre: 'Informes'
    },
    {
      link:'document',
      nombre: 'tutoriales'
    },
    {
      link:'document',
      nombre: 'Sugerencia'
    }*/
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
