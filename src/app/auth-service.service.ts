import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/*import { basUrl } from 'src/environments/environment';*/

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }
  login(data): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/login', data);
  }
}
