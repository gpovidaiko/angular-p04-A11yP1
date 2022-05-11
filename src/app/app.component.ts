import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'a11y-p1';
	public disableComponents = false;
	public answer: string = 'no';
	public form: FormGroup;

	constructor(formBuilder: FormBuilder) {
		this.form = formBuilder.group({
			answer: ['no']
		})
	}

	public disableComponentsChange(value: boolean) {
		this.disableComponents = value;

		const action = this.disableComponents ? 'disable' : 'enable';
		this.form.get('answer')[action]();
	}

	public submit(): void {
		console.log(this.form.value);
	}
}
