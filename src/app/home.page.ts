import { Component, OnInit } from '@angular/core';

@Component({
    template: `
        <pre>
            <code>
            Visit <a href="https://acorexui.com">acorexui.com</a> for previews.
            </code>
        </pre>
    `
})
export class HomePage implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
