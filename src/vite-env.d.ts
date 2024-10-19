interface ImportMetaEnv {
  readonly VITE_BACKEND_URL :string;
  readonly OPENAI_API_KEY : string;
  readonly VITE_OPENAI_API_URL: string;  // Type declaration for API URL  
  readonly VITE_APP_TITLE: string;
}

interface ImportMeta{
  readonly env:ImportMetaEnv;
}