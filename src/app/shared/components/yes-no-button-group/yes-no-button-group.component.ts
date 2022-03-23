import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-yes-no-button-group',
	templateUrl: './yes-no-button-group.component.html',
	styleUrls: ['./yes-no-button-group.component.scss']
})
export class YesNoButtonGroupComponent implements OnInit {

	@Input() public value: string = null;
	@Input() public label: string = '';
	@Output() public valueChange: EventEmitter<string> = new EventEmitter<string>();

	public options = ButtonGroupOptions;

	constructor() { }

	ngOnInit(): void {
	}

	public activate(value: string) {
		this.value = value;
		this.valueChange.emit(this.value);
	}

}

enum ButtonGroupOptions {
	YES = 'yes',
	NO = 'no'
}
