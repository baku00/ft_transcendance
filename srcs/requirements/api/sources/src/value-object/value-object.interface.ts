import { IGeneric } from './generics/interface';

export interface IValueObject extends IGeneric {
	value: string;
	[index: string]: any;
}
