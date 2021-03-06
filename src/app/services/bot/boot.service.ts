import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BootService {

    private baseURL = 'https://api.dialogflow.com/v1/query?v=20150910';
    private token = 'd279f7b0ceac4a03944cff655ecb7c72';

    constructor(private http: HttpClient) { }

    /**
     * @param {string} query
     * @return {Observable<Object>}
     */
    public getResponse(query: string) {
        let data = {
            query: query,
            lang: 'en',
            sessionId: '12345'
        };

        return this.http
            .post(`${this.baseURL}`, data, { headers: this.getHeaders() });
    }

    public getHeaders() {
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', `Bearer ${this.token}`);
        return headers;
    }
}
