import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSwitchConfigurationComponent } from './search-switch-configuration/search-switch-configuration.component';
import { SearchFiltersComponent } from './search-filters/search-filters.component';
import { SearchFilterComponent } from './search-filters/search-filter/search-filter.component';
import { SearchFacetFilterComponent } from './search-filters/search-filter/search-facet-filter/search-facet-filter.component';
import { SearchLabelsComponent } from './search-labels/search-labels.component';
import { SearchLabelLoaderComponent } from './search-labels/search-label-loader/search-label-loader.component';
import { SearchLabelLoaderDirective } from './search-labels/search-label-loader/search-label-loader-directive.directive';
import { SearchLabelComponent } from './search-labels/search-label/search-label.component';
import { SearchFacetFilterWrapperComponent } from './search-filters/search-filter/search-facet-filter-wrapper/search-facet-filter-wrapper.component';
import { SearchRangeFilterComponent } from './search-filters/search-filter/search-range-filter/search-range-filter.component';
import { SearchTextFilterComponent } from './search-filters/search-filter/search-text-filter/search-text-filter.component';
import { SearchHierarchyFilterComponent } from './search-filters/search-filter/search-hierarchy-filter/search-hierarchy-filter.component';
import { SearchBooleanFilterComponent } from './search-filters/search-filter/search-boolean-filter/search-boolean-filter.component';
import { SearchFacetOptionComponent } from './search-filters/search-filter/search-facet-filter-options/search-facet-option/search-facet-option.component';
import { SearchFacetSelectedOptionComponent } from './search-filters/search-filter/search-facet-filter-options/search-facet-selected-option/search-facet-selected-option.component';
import { SearchFacetRangeOptionComponent } from './search-filters/search-filter/search-facet-filter-options/search-facet-range-option/search-facet-range-option.component';
import { SearchAuthorityFilterComponent } from './search-filters/search-filter/search-authority-filter/search-authority-filter.component';
import { SearchSidebarComponent } from './search-sidebar/search-sidebar.component';
import { SearchSettingsComponent } from './search-settings/search-settings.component';
import { ConfigurationSearchPageComponent } from '../../search-page/configuration-search-page.component';
import { ThemedConfigurationSearchPageComponent } from '../../search-page/themed-configuration-search-page.component';
import { SearchObjects } from './models/search-objects.model';
import { FacetConfigResponse } from './models/facet-config-response.model';
import { FacetValues } from './models/facet-values.model';
import { SearchResult } from './models/search-result.model';
import { MissingTranslationHandler, TranslateModule } from '@ngx-translate/core';
import { MissingTranslationHelper } from '../translate/missing-translation.helper';
import { SharedModule } from '../shared.module';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchComponent } from './search.component';
import { ThemedSearchComponent } from './themed-search.component';
import { ThemedSearchResultsComponent } from './search-results/themed-search-results.component';
import { ThemedSearchSettingsComponent } from './search-settings/themed-search-settings.component';
import { SearchLabelRangeComponent } from './search-labels/search-label-range/search-label-range.component';

const ENTRY_COMPONENTS = [
  SearchFacetFilterComponent,
  SearchRangeFilterComponent,
  SearchTextFilterComponent,
  SearchHierarchyFilterComponent,
  SearchBooleanFilterComponent,
  SearchFacetOptionComponent,
  SearchFacetSelectedOptionComponent,
  SearchFacetRangeOptionComponent,
  SearchAuthorityFilterComponent,
  SearchLabelComponent,
  SearchLabelRangeComponent,
];

const COMPONENTS = [
  ...ENTRY_COMPONENTS,
  SearchComponent,
  ThemedSearchComponent,
  SearchResultsComponent,
  SearchSidebarComponent,
  SearchSettingsComponent,
  SearchFiltersComponent,
  SearchFilterComponent,
  SearchLabelsComponent,
  SearchLabelLoaderComponent,
  SearchFacetFilterWrapperComponent,
  SearchSwitchConfigurationComponent,
  ConfigurationSearchPageComponent,
  ThemedConfigurationSearchPageComponent,
  ThemedSearchResultsComponent,
  ThemedSearchSettingsComponent,
];

/**
 * Declaration needed to make sure all decorator functions are called in time
 */
export const MODELS = [
  SearchObjects,
  FacetConfigResponse,
  FacetValues,
  SearchResult
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    SearchLabelLoaderDirective,
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MissingTranslationHelper },
      useDefaultLang: true
    }),
    SharedModule.withEntryComponents()
  ],
  exports: [
    ...COMPONENTS,
    SearchLabelLoaderDirective,
  ]
})
export class SearchModule {
  /**
   * NOTE: this method allows to resolve issue with components that using a custom decorator
   * which are not loaded during SSR otherwise
   */
  static withEntryComponents() {
    return {
      ngModule: SearchModule,
      providers: ENTRY_COMPONENTS.map((component) => ({ provide: component }))
    };
  }
}
