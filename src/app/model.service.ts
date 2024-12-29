import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
 
isModalOpen:boolean=true;

private showRegisterFormSubject = new BehaviorSubject<boolean>(false);
showRegisterForm$ = this.showRegisterFormSubject.asObservable();
resetRegisterForm(): void {
  this.showRegisterFormSubject.next(false);
}
  private isModalVisibleSubject = new BehaviorSubject<boolean>(false);
  isModalVisible$ = this.isModalVisibleSubject.asObservable();

  toggleModal(): void {
    this.isModalVisibleSubject.next(!this.isModalVisibleSubject.value);
  }

 
  showRegisterForm(): void {
    this.showRegisterFormSubject.next(true);
  }

}