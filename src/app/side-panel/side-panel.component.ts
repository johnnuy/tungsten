import { Component, inject, model, Signal } from '@angular/core';
import { MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { MatIcon } from '@angular/material/icon';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'tungsten-side-panel',
  imports: [
    MatCard,
    MatCardHeader,
    MatInputModule, 
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.css'
})
export class SidePanelComponent {

  private walletService = inject(WalletService);

  currentWallet = this.walletService.currentWallet;

  
}
