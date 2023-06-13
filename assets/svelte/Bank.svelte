<script>
    import { customPercentStore } from "../stores";

    export let bank;
    export let carLease;
    export let kaibemakse;
    export let person;
    export let type;
    export let euroborPrices;

    $: interest = 0;
    $: currentInterest =
        (bank.interest == 0 ? 0 : bank.interest) +
        (interest == 0 ? 0 : interest);

    $: interestWithEurobor =
        currentInterest != 0
            ? Number(currentInterest) + Number(euroborPrices[bank.euroborAeg])
            : 0;

    $: carPriceWithRemovedNumbers =
        carLease.price -
        (carLease.self_finance === "" ? 0 : carLease.self_finance) -
        (type == "kasutus"
            ? carLease.price_left === ""
                ? 0
                : carLease.price_left
            : 0);
    $: carPriceKM =
        carPriceWithRemovedNumbers *
        (person == "legal" ? 1 : kaibemakse) *
        (type == "kapital" ? 0.7 : 1);

    $: monthlyPrice =
        Math.round(100 * ((interestWithEurobor / 100 / 12) * carPriceKM)) /
        (1 -
            1 / Math.pow(interestWithEurobor / 100 / 12 + 1, carLease.period)) /
        100;

    // display stuff
    $: displayCarPriceKM = Number(carLease.price) * 1.2;
    $: displayCarPrice = Number(carLease.price);
    $: displayPriceLeft = Number(carLease.price_left);

    // $: fullCarPriceWithKM =
    //     carLease.price * (person == "legal" ? 1 : kaibemakse);

    // $: discountedCarPrice =
    //     fullCarPriceWithKM -
    //     (carLease.self_finance === "" ? 0 : carLease.self_finance) -
    //     (type == "kasutus"
    //         ? carLease.price_left === ""
    //             ? 0
    //             : carLease.price_left
    //         : 0);
</script>

<!-- class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 text-gray-700 font-semibold" -->
<!-- class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" -->
<!-- <p class="font-normal text-gray-700 dark:text-gray-400"> -->
<a
    href={`${bank.link ? bank.link : "#"}`}
    class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 text-gray-700 font-semibold"
>
    {#if bank.logo !== ""}
        <img src={bank.logo} alt="logo" width="100" height="300" class="pb-2" />
    {:else}
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {bank.name}
        </h5>
    {/if}
    <div class="flex flex-col">
        <div style="min-width: 12em;" class="labels_around">
            {#if bank.interest != null && bank.interest != 0 && bank.name != "Oma"}
                <p class="text-gray-500 text-xs">Interest</p>
                <p class="text-gray-500 font-normal">
                    {bank.interest.toFixed(2)}% + {bank.euroborAeg}
                </p>
            {:else}
                <p class="text-gray-500 text-xs">Interest</p>
                <span>
                    <input
                        class="appearance-none shadow-sm border border-gray-200 text-sm p-2 focus:outline-none focus:border-gray-500 rounded-lg w-24"
                        bind:value={bank.interest}
                        on:input={() => ($customPercentStore = bank.interest)}
                        id="custom_interest"
                        type="text"
                        name="custom_interest"
                        placeholder="Oma %"
                        style="height: 1px;width: 70px;"
                    />
                    %
                </span>
            {/if}
        </div>
        <div style="min-width: 12em;" class="labels_around">
            <p class="text-gray-500 text-xs">Hind (KM-ga)</p>
            <p class="font-semibold">{displayCarPriceKM.toFixed(2)} €</p>
        </div>
        <div class="labels_around">
            <p class="text-gray-500 text-xs">Liisingusumma</p>
            <p>{displayCarPrice.toFixed(2)} €</p>
        </div>
        <div class="labels_around">
            <p class="text-gray-500 text-xs">KM</p>
            <p>{person == "private" ? 20 : 0} %</p>
        </div>
        <div class="labels_around">
            <p class="text-gray-500 text-xs">Periood</p>
            <p>{carLease.period}</p>
        </div>
        {#if type == "kasutus"}
            <div class="labels_around">
                <p class="text-gray-500 text-xs">Jääkväärtus</p>
                <p>{displayPriceLeft.toFixed(2)} €</p>
            </div>
        {/if}
    </div>

    <p class="font-semibold text-gray-700">
        {#if monthlyPrice.toFixed(2) > 1}
            {monthlyPrice.toFixed(2)} €
            {#if bank.electroCarSupport == true}
                <!-- {monthlyPrice.toFixed(2)} € -->
            {/if}
        {:else}
            viga
        {/if}
    </p>
</a>

<style lang="postcss">
    .labels_around {
        display: flex;
        justify-content: space-between;
    }
</style>
