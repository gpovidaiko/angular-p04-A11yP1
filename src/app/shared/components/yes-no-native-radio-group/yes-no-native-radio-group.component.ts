import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ButtonGroupOptions } from '../../enums/ButtonGroupOptions';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

@Component({
	selector: 'app-yes-no-native-radio-group',
	templateUrl: './yes-no-native-radio-group.component.html',
	styleUrls: ['./yes-no-native-radio-group.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			multi: true,
			useExisting: forwardRef(() => YesNoNativeRadioGroupComponent)
		}
	]
})
export class YesNoNativeRadioGroupComponent implements OnInit, ControlValueAccessor {

	@Input() public value: string = null;
	@Input() public label: string = '';
	@Input() public disabled: boolean = false;
	@Output() public valueChange: EventEmitter<string> = new EventEmitter<string>();

	public id: string = null;
	public options = ButtonGroupOptions;

	onChange = (value: string) => { };
	onTouched = () => { };

	constructor(private uniqueIdService: UniqueIdService) {
		this.id = this.uniqueIdService.generateUniqueIdWhitPrefix('radiogroup-label');
	}

	ngOnInit(): void {
	}

	writeValue(value: string): void {
		this.value = value;
		this.onChange(this.value);
		this.valueChange.emit(this.value);
	}

	registerOnChange(fn: (value: string) => void): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	setDisabledState?(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}

	public activate(value: string) {
		this.writeValue(value);
	}

}


