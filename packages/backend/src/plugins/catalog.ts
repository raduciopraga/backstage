/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { CatalogBuilder } from '@backstage/plugin-catalog-backend';
import { EntityProvider } from '@backstage/plugin-catalog-node';
import { ScaffolderEntitiesProcessor } from '@backstage/plugin-scaffolder-backend';
import { Router } from 'express';
import { PluginEnvironment } from '../types';
import { InMemoryEventBroker } from '@backstage/plugin-events-backend';
import { GithubEntityProvider } from '@backstage/plugin-catalog-backend-module-github';

export default async function createPlugin(
  env: PluginEnvironment,
  providers?: Array<EntityProvider>,
): Promise<Router> {
  const builder = await CatalogBuilder.create(env);
  const githubEntityProviders = GithubEntityProvider.fromConfig(env.config, {
    logger: env.logger,
    // optional: alternatively, use scheduler with schedule defined in app-config.yaml
    schedule: env.scheduler.createScheduledTaskRunner({
      frequency: { minutes: 5 },
      timeout: { minutes: 3 },
    }),
    scheduler: env.scheduler,
  });
  builder.addEntityProvider(githubEntityProviders);
  builder.addProcessor(new ScaffolderEntitiesProcessor());
  builder.addEntityProvider(providers ?? []);
  const conflictBroker = new InMemoryEventBroker(env.logger);
  builder.setConflictEventBroker(conflictBroker);
  const { processingEngine, router } = await builder.build();
  await processingEngine.start();
  return router;
}
