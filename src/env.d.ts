/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_ZENN_USERNAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
