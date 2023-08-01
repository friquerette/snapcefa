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

      addCefaSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}): Observable<CefaSnap> {
       return this.getAllCefaSnaps().pipe(
        // Need to sort the face to get the biggest id, but facesnaps cant be sort because immuable (because from an Observable) so clone it with ...facesnaps
        map(cefasnaps => [...cefasnaps].sort((a, b) => a.id - b.id)),
        // Find the last sortedCefasnap (with the biggest ID)
        map(sortedCefasnap => sortedCefasnap[sortedCefasnap.length-1]),
        // Build the new object and put the "ID number + 1"
        map(previousCefasnap => ({
          ...formValue,
          snaps: 0,
          createdDate: new Date(),
          id: previousCefasnap.id + 1
        })),
        switchMap(newCefaSnap => this.http.post<CefaSnap>('http://localhost:3000/facesnaps', newCefaSnap))
       );
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