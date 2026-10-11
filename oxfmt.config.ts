import {defineConfig} from 'oxfmt';

import config from '@ffflorian/oxfmt-config';

export default defineConfig({
  ...config,
  // Hugo templates (Go template syntax) and generated CSS must not be reformatted
  ignorePatterns: [...(config.ignorePatterns ?? []), '**/*.html', 'assets/css/compiled/**'],
});
