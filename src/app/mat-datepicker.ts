import { Platform } from '@angular/cdk/platform';
import { CommonModule, registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { LOCALE_ID, ModuleWithProviders, NgModule } from '@angular/core';
import {
  MatMomentDateModule,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorIntlCro } from 'src/app/pt-paginator-intl';

registerLocaleData(ptBr);

@NgModule({
  imports: [CommonModule, MatDatepickerModule],
  exports: [MatDatepickerModule, MatMomentDateModule],
})
export class MatDatePickerSharedModule {
  static forRoot(): ModuleWithProviders<MatDatePickerSharedModule> {
    return {
      ngModule: MatDatePickerSharedModule,
      providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
        { provide: LOCALE_ID, useValue: 'pt-BR' },
        { provide: MatPaginatorIntl, useClass: MatPaginatorIntlCro },
        {
          provide: DateAdapter,
          useClass: MomentDateAdapter,
          deps: [MAT_DATE_LOCALE, Platform],
        },
        {
          provide: MAT_DATE_FORMATS,
          useValue: {
            parse: {
              dateInput: 'DD/MM/YYYY',
            },
            display: {
              dateInput: 'DD/MM/YYYY',
              monthYearLabel: 'MMMM YYYY',
              dateA11yLabel: 'LL',
              monthYearA11yLabel: 'MMMM YYYY',
            },
          },
        },
      ],
    };
  }
}
