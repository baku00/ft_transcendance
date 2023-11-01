import { VALUE_NULL_OR_EMPTY_ERROR } from "./value-object.config";

export class ValueNullOrEmptyException extends Error {
	constructor(message: string = VALUE_NULL_OR_EMPTY_ERROR) {
		super(message);
		this.name = "ValueNullOrEmptyException";
	}
}
