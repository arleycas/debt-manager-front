import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpClient = inject(HttpClient);

  constructor() { 
    // console.log('QUE ESS', environment.URL_DEBT_MANAGER);
    
  }

  registerUser(formValue: any) {
    // todo, esto obtenerlo desde localstorage
    const headerDic = {
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6IkFybGVfQ2hhdGljbyIsImlhdCI6MTczMjE2MjMyOX0.0DMlWCplQ6KFCnGLUcdp49FkxiK_AhWdPbzqOkeaBhc'
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDic),
    }

    return firstValueFrom(
      this.httpClient.post(`${environment.URL_DEBT_MANAGER}/user/register`, formValue, requestOptions)
    )
  }
}
