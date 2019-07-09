import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DashMenu } from "../models/dash-menu.model";

@Injectable({
  providedIn: "root"
})
export class DashboardService {
  apiUrl: string = "http://localhost:4001/api/Dashboard";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "http://localhost:4001",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET"
    })
  };

  constructor(public http: HttpClient) {}

  public loadDashMenuItems() {
    return this.http.get<DashMenu>(this.apiUrl, {
      headers: this.httpOptions.headers
    });
  }
}


