// Define the type of the environment variables.
declare interface Env {
  readonly NODE_ENV: string;
  readonly NG_APP_API_KEY: string;
}

// Choose how to access the environment variables.
// Remove the unused options.

declare interface ImportMeta {
  readonly env: Env;
}

