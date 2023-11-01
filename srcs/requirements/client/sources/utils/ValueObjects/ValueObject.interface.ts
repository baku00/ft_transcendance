import { IGeneric } from '../Generics/Interface';

export interface IValueObject extends IGeneric {
	value: string;
	[index: string]: any;
}
