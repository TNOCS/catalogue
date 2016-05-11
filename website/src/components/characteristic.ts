import {bindable, bindingMode} from 'aurelia-framework';
import {ICharacteristic} from '../models/characteristic';

export class CharacteristicCustomElement {
    @bindable characteristic: ICharacteristic;
}