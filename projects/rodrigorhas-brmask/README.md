# @rhas/brmask

Angular library project forked from [amarkes/br-mask](https://github.com/amarkes/br-mask).

# brmasker-ionic

[![GitHub issues](https://img.shields.io/github/issues/amarkes/br-mask.svg)](https://github.com/rodrigorhas/br-mask/issues)
[![GitHub stars](https://img.shields.io/github/stars/rodrigorhas/br-mask.svg)](https://github.com/rodrigorhas/br-mask/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/rodrigorhas/br-mask.svg)](https://github.com/rodrigorhas/br-mask/network)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/rodrigorhas/br-mask/master/LICENSE)

return custom mask in input for ionic 4

# Required

- Node: 10.7.0
- npm 6.4.0
- ionic 4.1.2
- Angular CLI: 6.1.2

# install

```sh
npm install br-mask --save -E
```

# Usage

```javascript
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    BrMaskerModule
  ],
})

```

### HTML

```html
<form [formGroup]="form">
  <ion-item>
    <ion-input
      required
      type="text"
      formControlName="mask"
      placeholder="First Name"
      [brmasker]="{mask:'00-00', len:5, userCaracters: true}"
    ></ion-input>
  </ion-item>
</form>
```

### Other Examples

```html
<ion-item>
  <ion-input
    type="text"
    formControlName="mask"
    placeholder="Mask"
    [brmasker]="{mask: '00:00', type:'num'}"
  ></ion-input>
</ion-item>

<ion-item>
  <ion-input
    type="text"
    formControlName="mask"
    placeholder="Mask"
    [brmasker]="{userCaracters: true}"
  ></ion-input>
</ion-item>
```

### Example for CPF/CNPJ 999.999.999-99 / 99.999.999/9999-99

```html
<ion-item>
  <ion-input
    type="text"
    name="cpf"
    formControlName="mask"
    placeholder="CPF/CNPJ"
    [brmasker]="{person: true}"
  ></ion-input>
</ion-item>
```

### Example for Real 999,99

```html
<ion-item>
  <ion-input
    type="text"
    name="money"
    formControlName="mask"
    placeholder="(R$) Real"
    [brmasker]="{money: true}"
  ></ion-input>
</ion-item>
```

### Example for Money

```html
<ion-item>
  <ion-input
    type="text"
    formControlName="mask"
    name="money"
    placeholder="Money"
    [brmasker]="{money: true, thousand: ',',  decimalCaracter: '.', decimal: '3'}"
  ></ion-input>
</ion-item>
```

### Example for Real 99,999 With Decimal

```html
<ion-item>
  <ion-input
    type="text"
    name="money"
    formControlName="mask"
    placeholder="(R$) Real"
    [brmasker]="{money: true, decimal: 3}"
  ></ion-input>
</ion-item>
```

### Example for Real 99,999 With Decimal

```html
<ion-item>
  <ion-input
    type="text"
    name="percent"
    formControlName="mask"
    placeholder="% Percent"
    [brmasker]="{percent: true}"
    value=""
  ></ion-input>
</ion-item>
```

### Example for Phone (99) 9999-9999 / (99) 99999-9999

```html
<ion-item>
  <ion-input
    type="text"
    name="phone"
    formControlName="mask"
    placeholder="Phone"
    [brmasker]="{phone: true}"
  ></ion-input>
</ion-item>
```

### Example for Phone not ddd 9999-9999 / 99999-9999

```html
<ion-item>
  <ion-input
    type="text"
    name="phone"
    formControlName="mask"
    placeholder="Phone"
    [brmasker]="{phoneNotDDD: true}"
  ></ion-input>
</ion-item>
```

### Example for number thousand

```html
<ion-item>
  <ion-input
    type="text"
    formControlName="phone"
    [value]="form.get('phone').value"
    name="phone"
    placeholder="Phone"
    [brmasker]="{numberAndTousand: true, thousand: ','}"
  ></ion-input>
</ion-item>
```

# Features

```ts
import { BrMaskDirective, BrMaskModel } from 'br-mask';

...

constructor(public brMask: BrMaskDirective) {}

...

protected createForm(): FormGroup {
  return new FormGroup({
    phone: new FormControl(this.createPhone())
  });
}

private createPhone(): string {
  const config: BrMaskModel = new BrMaskModel();
  config.phone = true;
  return this.brMask.writeCreateValue('99999999999', config);
}
```

# Inputs

- brmasker: BrMaskModel

```ts
BrMaskModel = {
  form: AbstractControl;
  mask: string;
  len: number;
  money: boolean;
  phone: boolean;
  phoneNotDDD: boolean;
  person: boolean;
  percent:boolean;
  type: 'alfa' | 'num' | 'all';
  decimal: number = 2;
  decimalCaracter: string = `,`;
  thousand: string;
  userCaracters = false;
  numberAndTousand: false,
  moneyInitHasInt: true
}
```

| Name             | type        | info                     |
| ---------------- | ----------- | ------------------------ |
| form             | FormControl | Obsolete                 |
| mask             | string      | Optional                 |
| len              | string      | Optional                 |
| money            | boolean     | Optional                 |
| phone            | boolean     | Optional                 |
| phoneNotDDD      | boolean     | Optional                 |
| person           | boolean     | Optional                 |
| percent          | boolean     | Optional                 |
| type             | string      | Optional default 'all'   |
| decimalCaracter  | string      | Optional default ','     |
| decimal          | number      | Optional default '2'     |
| thousand         | string      | Optional                 |
| userCaracters    | boolean     | Optional default `false` |
| numberAndTousand | boolean     | Optional default `false` |
| moneyInitHasInt  | boolean     | Optional default `true`  |

`moneyInitHasInt is when you need to use cents in value`

# Characters

`- . / ( ) , * + @ # $ & % :`

# Development Tips

## Build

Run `ng build rodrigorhas-brmask` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build rodrigorhas-brmask`, go to the dist folder `cd dist/rodrigorhas-brmask` and run `npm publish`.

## Running unit tests

Run `ng test rodrigorhas-brmask` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
