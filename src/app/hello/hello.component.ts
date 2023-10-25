import { Component } from '@angular/core';

@Component({
    selector: 'hello',
    template: `
        <h2>
            Olá {{nome}}
        </h2>
    `
})
export class HelloComponent{
    nome = 'Abilio do Rio';
}