import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class DataService {

  private _actionUrl = 'http://190.81.160.212:3000/api/';
  constructor(private http: Http) {}

  getCandidatos() {
    const url = this._actionUrl + 'Candidato';
    return this.http.get(url).map((res: Response) => res.json());
  }
  getCiudadanoByCandidato(candidato) {
    const url = this._actionUrl + 'queries/selectCiudadanoByCandidato?dni=' + candidato.dni;
    return this.http.get(url).map((res: Response) => res.json());
  }
  getPartidoByCandidato(candidato) {
    const url = this._actionUrl + 'queries/selectPartidoByCandidato?nombre=' + candidato.partido.split('#')[1];
    return this.http.get(url).map((res: Response) => res.json());
  }
}
