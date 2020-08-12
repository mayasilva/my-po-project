import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/tarefas';

  getTarefas(filtro?: string) {
    const filtrourl = filtro == null ? "" : "?descricao_like="+filtro

    return this.http.get(this.url+filtrourl);
  }

  getTarefa(id: Number) {
    return this.http.get(this.url+'/'+id);
  }

  putTarefa(tarefa) {
    return this.http.put(this.url+'/'+tarefa.id,tarefa);
  }

  postTarefa(tarefa) {
    return this.http.post(this.url,tarefa)
  }

  deleteTarefa(id: Number){
    return this.http.delete(this.url+'/'+id)
  }

}

