import { validatedConfig } from './env';

// PUBLIC_INTERFACE
export function isEnabled(flagName) {
  /** Check if a feature flag is enabled using REACT_APP_FEATURE_FLAGS. */
  const { featureFlags } = validatedConfig();
  return !!featureFlags[flagName];
}
