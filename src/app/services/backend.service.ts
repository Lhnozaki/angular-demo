import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BackendService {
  constructor(private http: HttpClient) {}

  contact(data) {
    console.log(data);
    return this.http.post("/api/contact", data).toPromise();
  }

  login(data) {
    return Promise.resolve({
      id: data.id,
      username: data.username
    });
  }

  register(data) {
    return Promise.resolve();
  }

  logout() {
    return Promise.resolve();
  }
}
