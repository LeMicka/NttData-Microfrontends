import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowEventService {

  dispatch(eventName: string, detail?: any): void {
    const event = new CustomEvent(eventName, { detail });
    window.dispatchEvent(event);
    console.log(event)
  }
}