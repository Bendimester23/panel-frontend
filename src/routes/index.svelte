<script lang="ts">
    import { isLoggedIn } from "../store/auth";

    import { ArrowCircleUp, Cake } from "svelte-hero-icons";

    import Icon from "svelte-hero-icons/Icon.svelte";

    function toggleLogin() {
        isLoggedIn.set(!$isLoggedIn);
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<Icon src={ArrowCircleUp} class="w-6 h-6 text-red-500" />
<Icon src={Cake} class="w-12 h-12 text-blue-500" />

<button on:click="{toggleLogin}">Login test</button>
