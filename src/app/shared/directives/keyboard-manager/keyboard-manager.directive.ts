import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';
import { ContentChildren, Directive, HostListener, QueryList } from '@angular/core';

@Directive({
	selector: '[appKeyboardManager]'
})
export class KeyboardManagerDirective {

	@ContentChildren(KeyboardManagedItemDirective)
	public items: QueryList<KeyboardManagedItemDirective>;

	constructor() { }

	@HostListener('keyup', ['$event'])
	public manageKeys(event: KeyboardEvent): void {
		switch (event.key) {
			case 'ArrowUp':
				this.moveFocus(ArrowDirection.RIGHT).focus();
				break;
			case 'ArrowDown':
				this.moveFocus(ArrowDirection.LEFT).focus();
				break;
			case 'ArrowLeft':
				this.moveFocus(ArrowDirection.LEFT).focus();
				break;
			case 'ArrowRight':
				this.moveFocus(ArrowDirection.RIGHT).focus();
				break;
			default:
				break;
		}
	}

	public moveFocus(direction: ArrowDirection): KeyboardManagedItemDirective {
		const items = this.items.toArray();
		const currentActiveIndex = items.findIndex(item => item.isFocused());
		const targetElementFocus = items[currentActiveIndex + direction];

		if (targetElementFocus) {
			return targetElementFocus;
		}

		return direction === ArrowDirection.LEFT ? items[items.length - 1] : items[0];
	}

}

enum ArrowDirection {
	LEFT = -1,
	RIGHT = 1
}
