export default {
  css: ["~/assets/css/app.scss"],
  nitro: {
    preset: "vercel-edge",
  },
  modules: ["@nuxt/ui"],
  typescript: {
    typeCheck: true,
  },
};
