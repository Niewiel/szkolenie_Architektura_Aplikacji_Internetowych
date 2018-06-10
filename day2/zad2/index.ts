import {bootstrap} from 'angular2/platform/browser';
import {Component, Directive} from 'angular2/core';

@Directive({
    selector: 'input[log-directive]',
    host: {
        '(input)': 'oninput($event)'
    }
})

class LogDirective {
    onInput(event) {
        console.log(event.target.valueOf());
    }
}

@Component({
    selector: 'directive-example',
    directives: [LogDirective],
    template: '<input type="text" log-directive=""/>'
})

class DirectiveExample {
}

bootstrap(DirectiveExample);