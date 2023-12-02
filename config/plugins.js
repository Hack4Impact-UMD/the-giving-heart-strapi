module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-supabase",
      providerOptions: {
        apiUrl: env("SUPABASE_API_URL"),
        apiKey: env("SUPABASE_API_KEY"),
        bucket: env("SUPABASE_BUCKET"),
        directory: env("SUPABASE_DIRECTORY"),
        options: {},
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: 'amazon-ses',
      providerOptions: {
        key: env('AWS_SES_KEY'),
        secret: env('AWS_SES_SECRET'),
        amazon: 'https://email.us-east-2.amazonaws.com',
      },
      settings: {
        defaultFrom: 'thegivingheart.dev@gmail.com',
        defaultReplyTo: 'thegivingheart.dev@gmail.com',
      },
    },
  },
});
