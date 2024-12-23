import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip';
import { User } from '../models/user';
import { Authresponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
    ) {}

  url='http://localhost:3000/api/trips';
  baseUrl = 'http://localhost:3000/api';

  //Call to our /login endpoint, returns JWT
  login(user: User, passwd: string) : Observable<Authresponse> {
    return this.handleAuthAPICall('login', user, passwd);
  }

  //Call to our /register endpoint, creates user and returns JWT
  register(user: User, passwd: string) : Observable<Authresponse> {
    return this.handleAuthAPICall('register', user, passwd);
  }

  //helper method to proces both login and register methods
  handleAuthAPICall(endpoint: string, user: User, passwd: string) :
  Observable<Authresponse> {
  // console.log('Inside TripDataService::handleAuthAPICall');
  let formData = {
    name: user.name,
    email: user.email,
    password: passwd
    };

    return this.http.post<Authresponse>(this.baseUrl + '/' + endpoint, formData);

  }

  getTrips() : Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url);
  }

  addTrip(formData: Trip) : Observable<Trip> {
    return this.http.post<Trip>(this.url, formData);
  }

  getTrip(tripCode: string) : Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url + '/' + tripCode);
  }

  updateTrip(formData: Trip) : Observable<Trip> {
    return this.http.put<Trip>(this.url + '/' + formData.code, formData);
  }
}
