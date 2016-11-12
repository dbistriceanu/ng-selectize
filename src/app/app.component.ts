import {Component} from '@angular/core';
import {ExampleSelectizeOption} from "./ng2-selectize.types";

@Component({
	selector: '[app-root]',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Angular 2 Selectize Example';

	multiSelectDynamicAddConfig:Selectize.IOptions<any, any> = {
		persist: true,
		labelField: 'label',
		valueField: 'value',
		plugins: ['remove_button']
	};

	multiSelectDynamicAddPlaceholder: string = "Placeholder...";

	singleSelectDynamicAddConfig:Selectize.IOptions<any, any> = {
		persist: true,
		labelField: 'label',
		valueField: 'value',
		maxItems: 1
	};

	multiSelectDynamicAddOptions:ExampleSelectizeOption[] = [<ExampleSelectizeOption>{
		label: 'init',
		value: 'value'
	}];

	singleSelectDynamicAddOptions:ExampleSelectizeOption[] = [<ExampleSelectizeOption>{
		label: 'init',
		value: 'value'
	}];

	onSelectizeValueChange(value) {
		console.log("Selectize value changed: ", value)
	}

	addMultiSelectDynamicAddOption() {
		this.multiSelectDynamicAddOptions.push(<ExampleSelectizeOption>{
			label: Math.random().toString(),
			value: Math.random()
		});
	}

	addSingleSelectDynamicAddOption() {
		this.singleSelectDynamicAddOptions.push(<ExampleSelectizeOption>{
			label: Math.random().toString(),
			value: Math.random()
		});
	}
}
