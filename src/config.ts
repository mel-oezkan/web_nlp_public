export const model = 'text-davinci-002';

// Set REACT_APP_OPENAI_API_KEY in a local .env file (see .env.example).
// Note: in a client-side React app this value is embedded in the built bundle,
// so do not deploy a build containing a real key publicly.
export const apiKey = process.env.REACT_APP_OPENAI_API_KEY ?? '';
