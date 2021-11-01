<script lang="ts">
    import { isLoggedIn, user } from "../store/auth";

    import { Server } from "svelte-hero-icons";
    import Icon from "svelte-hero-icons/Icon.svelte";
    import OutlinedLink from "./OutlinedLink.svelte";
</script>

<div class="w-full h-12 bg-gray-700 flex flex-row">
    <div class="mx-4 flex flex-row justify-center">
        <Icon src={Server} class="w-12 h-12 text-white" />
        <a class="text-white self-center font-semibold text-2xl px-2" href="/"
            >Ultimate panel2000</a
        >
    </div>
    <div class="flex flex-grow" />
    {#if $isLoggedIn}
        <div class="flex flex-row flex-grow-0 mx-16 py-2">
            <img
                class="rounded-lg mx-2"
                src="https://avatars.dicebear.com/api/adventurer/{$user.username}.svg"
                alt="{$user.username}'s profile picture"
            />
            <p>{$user.username}</p>
        </div>
    {:else}
        <div class="flex flex-row">
            <OutlinedLink to="/login">Login</OutlinedLink>
            <OutlinedLink to="/register">Register</OutlinedLink>
        </div>
    {/if}
</div>
