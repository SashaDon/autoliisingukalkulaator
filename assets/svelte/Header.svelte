<script>
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Orbit&family=PT+Mono&display=swap');
</style>


<header class="px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between border-b border-zinc-100 py-3 text-sm">
        <div class="flex items-center gap-4">
            <a href="/">
            <h2 style="    font-family: 'Orbit', sans-serif; font-family: 'PT Mono', monospace;">autokalk</h2>
            </a>
        </div>
        <div class="flex items-center gap-4 font-semibold leading-6 text-zinc-900">
            <div class="flex justify-center items-center h-full w-full">
                <form phx-submit="set_session">
                    <!-- svelte-ignore a11y-autofocus -->
                    <input
                        type="text"
                        placeholder="Sessioon kood"
                        name="session"
                        class="rounded"
                        autofocus
                        autocomplete="name"
                    />
                    <button class="py-2 px-4 bg-black text-white rounded">Liitu sessioon</button>
                </form>

                <button phx-click="new_session" class="py-2 px-4 bg-black text-white rounded">Uus sessioon</button>
            </div>
        </div>
    </div>
</header>


<div></div>
