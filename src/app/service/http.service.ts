import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class HttpService {
    snagUrl: string = 'http://www.snagfilms.com/apis/films.json?limit=10'
    constructor(private http: Http) {

    }

    getFilms(): Observable<any> {
        return this.http.get(this.snagUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }
}