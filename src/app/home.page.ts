import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
    template: `
     <div class="ax-h-full">
        <ul class="ax-flex">
            <ng-container *ngFor="let item of routerItems">
            <li class="ax-py-2 ax-px-4 ax-capitalize ax-rounded-lg ax-shadow-sm ax-border border-light-300 ax-m-2 ax-cursor-pointer hover:ax-shadow-lg hover:ax-bg-primary-100 hover:ax-text-primary-500 hover:ax-border-primary-200" [routerLink]="[item.path]">
                    {{item.text }}
            </li>
            </ng-container>
        </ul>
     </div>
    `
})
export class HomePage implements OnInit {
    routerItems: any = [];
    constructor(private router: Router) {
        const arr: any = []
        router.config.filter(c => c.path !== '' && c.path !== 'home').forEach(c => {
            arr.push({
                path: c.path,
                text: c.path?.replace('-', ' ')
            })
        })
        this.routerItems = arr


    }

    ngOnInit(): void { }
}
