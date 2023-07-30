import { Injectable } from "@angular/core";
import { CefaSnap } from "../models/cefa-snap-model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    // save this service to the root of the application (only one instance of this service for the application)
    providedIn: 'root'
})
export class CefaSnapsService {
  constructor(private http: HttpClient) {}

    cefaSnaps: CefaSnap[] = [
      ];

      getAllCefaSnapsNewHttp(): Observable<CefaSnap[]> {
        return this.http.get<CefaSnap[]>('http://localhost:3000/facesnaps');
      };

      getAllCefaSnaps(): CefaSnap[] {
        return this.cefaSnaps;
      };

      getFaceSnapNewHttpById(id: number): Observable<CefaSnap> {
           return this.http.get<CefaSnap>(`http://localhost:3000/facesnaps/${id}`);
      };

      getFaceSnapById(id: number): CefaSnap {
        const cefaSnap = this.cefaSnaps.find(c => c.id === id);
        if (!cefaSnap) {
            throw new Error('CefaSnap not found!');
        } else {

        }
        return cefaSnap;
      };

      snapCefaNewHttpById(id: number, snapType: 'snap' | 'unsnap'): void {
        const cefaSnap = this.getFaceSnapById(id);
        snapType === 'snap' ? cefaSnap.snaps++ : cefaSnap.snaps--;
      };

      snapCefaById(id: number, snapType: 'snap' | 'unsnap'): void {
        const cefaSnap = this.getFaceSnapById(id);
        snapType === 'snap' ? cefaSnap.snaps++ : cefaSnap.snaps--;
      };

      addCefaSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}): void {
        const cefaSnap: CefaSnap = {
          ...formValue,
          createdDate: new Date(),
          snaps:0,
          id: this.cefaSnaps[this.cefaSnaps.length - 1].id + 1
        };
        this.cefaSnaps.push(cefaSnap);
      };
}