import { IValueObject } from "./value-object.interface";
import { isEqual } from "lodash";

export abstract class ValueObject<T extends IValueObject> {
	public readonly props: T;

	protected constructor(props: T) {
		this.props = Object.freeze(props);
	}

	public equals(vo?: T): boolean {
		if (vo === null || vo === undefined) {
			return false;
		}
		if (vo.props === undefined) {
			return false;
		}

		return isEqual(this.props, vo.props);
	}

	public get value(): string {
		return this.props.value;
	}

	public get data(): T {
		return this.props;
	}

	public validate(message: string = ""): boolean {
		return true;
	}
}
