const sveltePreprocess = require("svelte-preprocess");
/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  preprocess: sveltePreprocess(),
  kit: {
    adapter: "@sveltejs/adapter-static",
    target: "#svelte",
  },
};
