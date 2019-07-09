import { NgModuleFactory, Type } from '@angular/core';

export const lazyWidgets: { name: string, loadChildren: () => Promise<NgModuleFactory<any> | Type<any>> }[] = [
  {
    name: 'corebanking-comp',
    loadChildren: () => import('./components/corebanking-comp/corebanking-mod.module').then(m => m.LazyModModule)
  },
  {
    name: 'health',
    loadChildren: () => import('./screens/insurance/health/health-mod.module').then(m => m.LazyModModule)
  },
  {
    name: 'traffic',
    loadChildren: () => import('./screens/insurance/traffic/traffic-mod.module').then(m => m.LazyModModule)
  }
]

export function lazyArrayToObj() {
  const result = {};
  for (const w of lazyWidgets) {
    result[w.name] = w.loadChildren;
  }
  
  return result;
}