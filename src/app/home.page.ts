import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
    template: `
     <h1 class="ax-text-gray-900 ax-font-extrabold ax-text-4xl ax-sm:text-5xl ax-lg:text-6xl ax-tracking-tight ax-dark:text-white ax-my-4">
         ACoreX preview.
     </h1>
     <p class="ax-mt-4 ax-text-lg ax-text-gray-600 ax-max-w-3xl ax-dark:text-gray-400">Here you can see ACoreX components</p>
     <ul>
         <ng-container *ngFor="let item of routerItems">
           {{item.path}}
         </ng-container>
         
     </ul>
    `
})
export class HomePage implements OnInit {
    routerItems:Routes = [];
    constructor(private router: Router) {
        this.routerItems = router.config.filter(c => c.path !== '' && c.path !== 'home')
        this.routerItems.forEach(c=>c.loadChildren)
        
     }

    ngOnInit(): void { }
}
