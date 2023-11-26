import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../services/vehiculos.service';
import { Vehiculo } from '../models/vehiculo.model';

@Component({
  selector: 'app-listado-vehiculos',
  templateUrl: './listado-vehiculos.component.html',
  styleUrls: ['./listado-vehiculos.component.scss']
})
export class ListadoVehiculosComponent implements OnInit {
  vehiculos: Vehiculo[] = [];

  constructor(private vehiculosService: VehiculosService) { }

  ngOnInit(): void {
    this.obtenerVehiculos();
  }

  obtenerVehiculos(): void {
    this.vehiculosService.obtenerVehiculos().subscribe(
      (data: Vehiculo[]) => {
        this.vehiculos = data;
      },
      (error) => {
        console.error('Error al obtener los vehículos:', error);
      }
    );
  }

  getTotalPorMarca(marca: string): number {
    return this.vehiculos.filter(v => v.marca === marca).length;
  }
}
