## API Report File for "@backstage/plugin-catalog-react"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { Entity } from '@backstage/catalog-model';
import { ResourcePermission } from '@backstage/plugin-permission-common';

// @alpha
export function isOwnerOf(owner: Entity, entity: Entity): boolean;

// @alpha
export function useEntityPermission(
  permission: ResourcePermission<'catalog-entity'>,
): {
  loading: boolean;
  allowed: boolean;
  error?: Error;
};

// (No @packageDocumentation comment for this package)
```