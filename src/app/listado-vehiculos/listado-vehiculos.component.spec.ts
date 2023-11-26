import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { ListadoVehiculosComponent } from './listado-vehiculos.component';
import { VehiculosService } from '../services/vehiculos.service';

describe('ListadoVehiculosComponent', () => {
  let component: ListadoVehiculosComponent;
  let fixture: ComponentFixture<ListadoVehiculosComponent>;
  let vehiculosService: VehiculosService; // Declara una variable para el servicio

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadoVehiculosComponent],
      imports: [HttpClientTestingModule], 
      providers: [VehiculosService] // Asegúrate de proporcionar el servicio aquí
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoVehiculosComponent);
    component = fixture.componentInstance;
    vehiculosService = TestBed.inject(VehiculosService);
    
    component.vehiculos = [
      { marca: 'Renault', linea: 'Clio', modelo: '2020' },
      { marca: 'Chevrolet', linea: 'Spark', modelo: '2021' },
      { marca: 'Nissan', linea: 'Versa', modelo: '2019' },
    ];
    fixture.detectChanges();
  });

  it('should create a table with three rows plus the header', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('table.table tbody tr');
    expect(tableRows.length).toBe(3);
    const tableHeader = fixture.nativeElement.querySelector('table.table thead tr');
    expect(tableHeader).toBeTruthy(); 
  });

});
