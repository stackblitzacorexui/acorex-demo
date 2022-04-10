import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-progressbar-decoration',
    templateUrl: './progressbar-decoration.page.html',
})
export class ProgressbarDecorationPage implements OnInit {
    val = 0
    constructor() { }
    ngOnInit(): void { 
        setInterval(()=>{
            if(this.val !== 100) {
                this.val += 10
            }
        },1000)
    }
}
