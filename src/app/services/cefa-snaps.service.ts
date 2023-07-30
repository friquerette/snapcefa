import { Injectable } from "@angular/core";
import { CefaSnap } from "../models/cefa-snap-model";
import { HttpClient } from "@angular/common/http";
import { Observable, map, switchMap } from "rxjs";

@Injectable({
    // save this service to the root of the application (only one instance of this service for the application)
    providedIn: 'root'
})
export class CefaSnapsService {
  constructor(private http: HttpClient) {}

      getAllCefaSnaps(): Observable<CefaSnap[]> {
        return this.http.get<CefaSnap[]>('http://localhost:3000/facesnaps');
      };

      getFaceSnapById(id: number): Observable<CefaSnap> {
           return this.http.get<CefaSnap>(`http://localhost:3000/facesnaps/${id}`);
      };

      addCefaSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}): void {
        // const cefaSnap: CefaSnap = {
        //   ...formValue,
        //   createdDate: new Date(),
        //   snaps:0,
        //   id: this.cefaSnaps[this.cefaSnaps.length - 1].id + 1
        // };
        // this.cefaSnaps.push(cefaSnap);
      };

      snapCefaSnapById(id: number, snapType: 'snap' | 'unsnap'): Observable<CefaSnap> {
        return this.getFaceSnapById(id).pipe(
          map(cefaSnap => ({
            // copy the original object with ... and refresh the number of snaps
            ...cefaSnap,
            snaps: cefaSnap.snaps + (snapType === 'snap' ? 1 : -1)
          })),
          // switchMap is ok because this Observable will emit onlu once (so other method than switchMap is ok here)
          // switchMap is more used by convention here
          switchMap(updatedCefaSnaps => this.http.put<CefaSnap>(`http://localhost:3000/facesnaps/${id}`, updatedCefaSnaps))
        );
      };
}