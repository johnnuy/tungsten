import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  // Reactive signal for the currentWallet
  currentWallet = signal<{ address: string; balance: number }>({
    address: '',
    balance: 0,
  });

  constructor() { }

  // Method to update the currentWallet
  updateWallet(address: string, balance: number): void {
    this.currentWallet.set({ address, balance });
  }

  // Method to clear/reset the wallet
  resetWallet(): void {
    this.currentWallet.set({ address: '', balance: 0 });
  }
}
