import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, throwError } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class newsService {

    constructor(private httpClient: HttpClient) { }

    endpointUrl = 'https://api.currentsapi.services/v1/latest-news';
    apikey = '7meYgvXvHLUXkw8EYMIXQnfAa3BP2sXowhKL3pWhHmmRK9X1';


    getDailyNews() {
        const params = new HttpParams()
            .set('language', 'en')
            .set('apiKey', this.apikey);

        return this.httpClient.get(this.endpointUrl, { params }).pipe(
            catchError(this.handleError)
        )
    }

    private handleError(error: HttpErrorResponse) {

        let errorMessage = '';
        if (error.status === 0) {
            console.error('An error occurred:', error.error);
        } else {
            console.error(
                `Backend returned code ${error.status}, body was: `, error.error);
        }
        errorMessage = 'Something bad happened; please try again later :-(';
        return throwError(() => new Error(errorMessage));
    }

}