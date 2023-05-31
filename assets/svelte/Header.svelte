<script>

</script>



<header class="px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between border-b border-zinc-100 py-3 text-sm">
        <div class="flex items-center gap-4">
            <a href="/">
                <!-- <img src={~p"/images/logo.svg"} width="36" /> -->
                LOGO
            </a>
            <p class="bg-brand/5 text-brand rounded-full px-2 font-medium leading-6">
                v
                <!-- <%= Application.spec(:phoenix, :vsn) %> -->
            </p>
        </div>
        <div class="flex items-center gap-4 font-semibold leading-6 text-zinc-900">
            <div class="flex justify-center items-center h-full w-full">
                <form phx-submit="set_session">
                    <!-- svelte-ignore a11y-autofocus -->
                    <input
                        type="text"
                        placeholder="Session Code"
                        name="session"
                        class="rounded"
                        autofocus
                        autocomplete="name"
                    />
                    <button class="py-2 px-4 bg-black text-white rounded">Join Session</button>
                </form>

                <button phx-click="new_session" class="py-2 px-4 bg-black text-white rounded">New Session</button>
            </div>
        </div>
    </div>
</header>


<div></div>
