// Re-export the shared config instead of using `extends`: semantic-release 26
// lets its built-in default plugins override plugins from `extends` configs,
// which silently dropped @semantic-release/changelog and @semantic-release/git.
export {default} from '@ffflorian/semantic-release-config';
