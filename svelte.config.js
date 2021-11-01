import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    target: "#svelte",
  },
  vite: {
    kit: {
      vite: {
        optimizeDeps: {
          include: ["svelte-hero-icons"],
        },
      },
    },
  }
};

export default config;
