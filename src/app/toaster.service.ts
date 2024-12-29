import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})


export class ToasterService {

   constructor(private _ToastrService: ToastrService) { }
   showSuccess(message: string, title: string = 'Success') {
    this._ToastrService.success(message, title);}

    showError(message: string, title: string = 'Success') {
      this._ToastrService.error(message, title);
    }
}
