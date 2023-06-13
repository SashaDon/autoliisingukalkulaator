<script>
    // import {fly} from "svelte/transition"
    // import {elasticOut} from "svelte/easing"
    import { afterUpdate, onDestroy, onMount } from "svelte";
    import { customPercentStore } from "../stores";

    export let pointers;
    export let carData;
    export let carLease2;
    export let percentages2;
    export let typeOfPerson2;
    export let typeOfLease2;
    export let checked2;
    export let hind;
    export let pushEvent;
    export let customPercent;

    function useEffect(cb, deps) {
        let cleanup;

        function apply() {
            if (cleanup) cleanup();
            cleanup = cb();
        }

        if (deps) {
            let values = [];
            afterUpdate(() => {
                const new_values = deps();
                if (new_values.some((value, i) => value !== values[i])) {
                    apply();
                    values = new_values;
                }
            });
        } else {
            // no deps = always run
            afterUpdate(apply);
        }

        onDestroy(() => {
            if (cleanup) cleanup();
        });
    }

    let body = "";
    let messagesElement;

    $: charCount = body.length;

    // afterUpdate(() => messagesElement.scroll({top: messagesElement.scrollHeight, behavior: "smooth"}))

    function submitMessage() {
        if (body === "") return;
        pushEvent("send_message", { body });
        body = "";
    }

    $: unixtime = Date.now() / 1000;
    // $: y = 50;

    onMount(async () => {
        const interval = setInterval(() => {
            unixtime = Date.now() / 1000;
        }, 1000);

        document.addEventListener("mousemove", (e) => {
            const new_x = (e.pageX / window.innerWidth) * 100; // in %
            const new_y = (e.pageY / window.innerHeight) * 100; // in %
            // this.pushEvent('cursor-move', { x, y });
            pushEvent("cursor-move", { new_x, new_y });

            // console.log("new_x", new_x);
            // console.log("new_y", new_y);

            // x = new_x;
            // y = new_y;
        });
        // carLease = {
        //     price: carData.carLease.price,
        //     period: Number(carData.carLease.period),
        //     self_finance: Number(carData.carLease.self_finance),
        //     price_left: Number(carData.carLease.price_left),
        // };
    });
    import Bank from "./Bank.svelte";

    console.log(hind);

    $: kaibemakse = 1.2;

    console.log("cardData");
    console.log(carData);
    // let carLease = {
    //     price: carLease2.price,
    //     period: Number(carLease2.period),
    //     self_finance: Number(carLease2.self_finance),
    //     price_left: Number(carLease2.price_left),
    // };
    // $: carLease = {
    //     price: 0,
    //     period: 0,
    //     self_finance: 0,
    //     price_left: 0,
    // };

    // let percentages = {
    //     self_finance: Number(carData.percentages.self_finance),
    //     price_left: Number(carData.percentages.price_left),
    // };

    $: checked = false;

    $: typeOfLease = "kasutus";
    $: typeOfPerson = "private";

    // let interest = 1.9;
    // function handleCustomBank() {
    // if (checked == true) {
    //     banks.push(custom);
    // } else {
    //     banks.splice(
    //         banks.findIndex((a) => a.name === "Custom"),
    //         1
    //     );
    // }
    // console.log(checked);
    // console.log(banks);
    // }

    // i.payment=i.interest/100/12*i.price/(1-1/Math.pow(i.interest/100/12+1,i.period)
    // i.payment=Math.round(100*i.payment)/100

    // o.payment=o.interest/100/12*o.loan/(1-1/Math.pow(o.interest/100/12+1,o.period)):o.priceBasedInterest?
    // o.payment=(o.price-o.advance+(o.price-o.advance)*(o.interest/100/12*o.period))/o.period:
    // o.payment=o.interest/100/12*(o.price-o.advance)/(1-1/Math.pow(o.interest/100/12+1,o.period)),o.payment=Math.round(100*o.payment)/100

    // $: monthlyPrice =
    //     Math.round(
    //         100 *
    //             (((interest / 100 / 12) *
    //                 (carLease.price - carLease.self_finance)) /
    //                 (1 -
    //                     1 / Math.pow(interest / 100 / 12 + 1, carLease.period)))
    //     ) / 100;
    // $: monthlyPrice =
    //     (carLease.price -
    //         carLease.self_finance +
    //         (carLease.price - carLease.self_finance) *
    //             ((interest / 100 / 12) * carLease.period)) /
    //     carLease.period;
    // $: monthlyPrice =
    //     ((carLease.price -
    //         (carLease.self_finance === "" ? 0 : carLease.self_finance) -
    //         (carLease.price_left === "" ? 0 : carLease.price_left)) /
    //         carLease.period) *
    //     (interest === "" ? 1 : interest / 100 + 1);

    // $: currentInterest = interest === "" ? 0 : Number(interest);
    // $: carPrice =
    //     carLease.price -
    //     (carLease.self_finance === "" ? 0 : carLease.self_finance) -
    //     (carLease.price_left === "" ? 0 : carLease.price_left);

    // $: monthlyPrice =
    //     Math.round(100 * ((currentInterest / 100 / 12) * carPrice)) /
    //     (1 - 1 / Math.pow(currentInterest / 100 / 12 + 1, carLease.period)) /
    //     100;

    export let touched = "";

    function handleChange2() {
        if (touched == "hind") {
            carLease2.self_finance =
                (percentages2.self_finance * carLease2.price) / 100;
            carLease2.self_finance = carLease2.self_finance.toFixed(2);

            carLease2.price_left =
                (percentages2.price_left * carLease2.price) / 100;
            carLease2.price_left = carLease2.price_left.toFixed(2);
        }
        if (touched == "self_finance") {
            percentages2.self_finance =
                (carLease2.self_finance * 100) / carLease2.price;
            percentages2.self_finance = percentages2.self_finance.toFixed(2);
        }

        if (touched == "self_finance_per") {
            carLease2.self_finance =
                (percentages2.self_finance * carLease2.price) / 100;
            carLease2.self_finance = carLease2.self_finance.toFixed(2);
        }

        if (touched == "price_left") {
            percentages2.price_left =
                (carLease2.price_left * 100) / carLease2.price;
            percentages2.price_left = percentages2.price_left.toFixed(2);
        }

        if (touched == "price_left_per") {
            carLease2.price_left =
                (percentages2.price_left * carLease2.price) / 100;
            carLease2.price_left = carLease2.price_left.toFixed(2);
        }

        checkedInverse = checked2;

        if (checked2 == true) {
            if (touched == "custom") {
                let checkedNew = checked2;
                if (checkedNew == false) {
                    checkedInverse = true;
                } else {
                    checkedInverse = false;
                }
            }
        }

        let customPercentNew = $customPercentStore;
        console.log("custom");
        console.log($customPercentStore);
        console.log(customPercent);
        pushEvent("updated-data", {
            carLease2,
            percentages2,
            typeOfLease2,
            typeOfPerson2,
            checkedInverse,
            customPercentNew,
        });
    }

    useEffect(
        () => {
            handleChange2();
        },
        () => [$customPercentStore]
    );
    // $: $customPercentStore, updateCustomPercent();

    // function updateCustomPercent() {

    //     $customPercentStore = bank.interest;
    //     let newCustomPercent = $customPercentStore;

    //     pushEvent("custom_bank", {
    //         newCustomPercent,
    //     });
    // }

    const banks = [
        {
            name: "SwedBank",
            interest: 2.29,
            logo: "http://www.huddingecentrum.se/images/1.240.1402050732/swedbank770x335.jpg",
            link: "https://www.swedbank.ee/business/finance/leasing/car",
            euroborAeg: "6 kuu",
            electroCarSupport: true,
        },
        {
            name: "LHV",
            interest: 1.95,
            logo: "https://i.pinimg.com/736x/58/b2/de/58b2de496caa848622c45ecd96291ea8.jpg",
            link: "https://www.lhv.ee/et/liising",
            euroborAeg: "6 kuu",
            electroCarSupport: false,
        },
        {
            name: "SEB",
            interest: 1.45,
            logo: "http://bfaa.lt/wp-content/uploads/sites/6/2016/09/seb_logo.jpg",
            link: "https://www.seb.ee/eraklient/laenud/liising-mugav-viis-soiduki-soetamiseks",
            euroborAeg: "6 kuu",
            electroCarSupport: false,
        },
        {
            name: "COOP",
            interest: 1.99,
            logo: "http://wasa.ee/static/Coop_CMYK1.jpg",
            link: "https://www.cooppank.ee/autoliising",
            euroborAeg: "6 kuu",
            electroCarSupport: false,
        },
        {
            name: "Luminor",
            interest: 2.49,
            logo: "https://paytraq.sk/assets/svg/clients-logo/luminor_logo.png",
            link: "https://luminor.ee/era/liising?static=true",
            euroborAeg: "3 kuu",
            electroCarSupport: false,
        },
    ];

    $: customBank = {
        name: "Oma",
        interest: customPercent,
        logo: "",
        euroborAeg: "6 kuu",
    };

    const euroborPrices = {
        "3 kuu": 3.388,
        "6 kuu": 3.671,
        "12 kuu": 3.834,
    };
</script>

<div class="containter flex justify-center content-align-column">
    <h1 class="p-2 mb-6 font-bold text-3xl sm:text-5xl md:text-5xl">
        Autoliising Kalkulaator
    </h1>
</div>
<div class="containter flex justify-center content-align-column">
    <div>
        <form action="" on:change={handleChange2}>
            <div class="grid gap-6 mb-6 md:grid-cols-3">
                <div>
                    <select
                        class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg w"
                        name=""
                        bind:value={typeOfLease2}
                        id="lease_type"
                    >
                        <option value="kasutus">Kasutusrent</option>
                        <option value="kapital">Kapitalirent</option>
                    </select>
                </div>
                <div>
                    <select
                        class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"
                        name=""
                        bind:value={typeOfPerson2}
                        id="person_type"
                    >
                        <option value="private">Private</option>
                        <option value="legal">Legal</option>
                    </select>
                </div>
                <div>
                    <div class="flex justify-content-row">
                        <input
                            type="checkbox"
                            class="relative h-5 w-5 cursor-pointer rounded-md border border-blue-gray-200 transition-all"
                            id="oma_pank"
                            bind:checked={checked2}
                            on:click={() => () => (touched = "custom")}
                            name="oma_pank"
                        />
                        <label for="oma_pank" class="pl-2">Oma Pank</label>
                    </div>
                </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label
                        for="price"
                        class="block mb-2 text-sm font-medium text-gray-900"
                        >Hind</label
                    >
                    <input
                        class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"
                        bind:value={carLease2.price}
                        on:click={() => (touched = "hind")}
                        on:input={handleChange2}
                        type="text"
                        id="price"
                        name="price"
                        placeholder="Hind"
                    />
                </div>
                <div>
                    <label
                        for="length"
                        class="block mb-2 text-sm font-medium text-gray-900"
                        >Periood</label
                    >
                    <input
                        class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"
                        bind:value={carLease2.period}
                        on:input={handleChange2}
                        id="length"
                        type="text"
                        name="length"
                        placeholder="Periood"
                    />
                </div>
                <div>
                    <label
                        for="oma_eur"
                        class="block mb-2 text-sm font-medium text-gray-900"
                        >Omafinantseering €</label
                    >
                    <input
                        class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"
                        bind:value={carLease2.self_finance}
                        on:click={() => (touched = "self_finance")}
                        on:input={handleChange2}
                        id="oma_eur"
                        type="text"
                        name="oma_eur"
                        placeholder="Omafinantseering €"
                    />
                </div>
                <div>
                    <label
                        for="oma_eur_per"
                        class="block mb-2 text-sm font-medium text-gray-900"
                        >Omafinantseering %</label
                    >
                    <input
                        class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"
                        bind:value={percentages2.self_finance}
                        on:click={() => (touched = "self_finance_per")}
                        on:input={handleChange2}
                        id="oma_eur_per"
                        type="text"
                        name="oma_eur_per"
                        placeholder="Omafinantseering %"
                    />
                </div>
                {#if typeOfLease2 == "kasutus"}
                    <div>
                        <label
                            for="jaak_eur"
                            class="block mb-2 text-sm font-medium text-gray-900"
                            >Jääkväärtus €</label
                        >
                        <input
                            class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"
                            bind:value={carLease2.price_left}
                            on:click={() => (touched = "price_left")}
                            on:input={handleChange2}
                            id="jaak_eur"
                            type="text"
                            name="jaak_eur"
                            placeholder="Jääkväärtus €"
                        />
                    </div>
                    <div>
                        <label
                            for="jaak_eur"
                            class="block mb-2 text-sm font-medium text-gray-900"
                            >Jääkväärtus %</label
                        >
                        <input
                            class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"
                            bind:value={percentages2.price_left}
                            on:click={() => (touched = "price_left_per")}
                            on:input={handleChange2}
                            type="text"
                            name="jaak_per"
                            placeholder="Jääkväärtus % "
                        />
                    </div>
                {/if}
            </div>
        </form>
    </div>
</div>

<!-- class={`grid gap-6 mb-6 ${
                checked ? "lg:grid-cols-5" : "lg:grid-cols-4"
            } ${checked ? "md:grid-cols-3" : "md:grid-cols-3"} grid-cols-1`} -->
<div class="containter flex justify-center">
    <div>
        <div
            class={`grid gap-6 mb-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1`}
        >
            {#if checked2 === true}
                <div>
                    <Bank
                        bank={customBank}
                        carLease={carLease2}
                        {kaibemakse}
                        type={typeOfLease2}
                        person={typeOfPerson2}
                        {euroborPrices}
                    />
                </div>
            {/if}
            {#each banks as bank (bank.name)}
                <div>
                    <Bank
                        {bank}
                        carLease={carLease2}
                        {kaibemakse}
                        type={typeOfLease2}
                        person={typeOfPerson2}
                        {euroborPrices}
                    />
                </div>
            {/each}
        </div>
    </div>
</div>

<br />
<hr />
<br />

<div class="flex justify-center">
    <p class="text-gray-500 text-xs">
        *Tulemus on ligikaudne ja võib erineda sulle pakutavatest tingimustest*
    </p>
</div>

{#each Object.entries(pointers) as [user_id, user_pointer]}
    {#if unixtime - user_pointer.unixtime < 5}
        <ul class="list-none" id={user_id}>
            <li
                style={"color: deeppink; left: " +
                    user_pointer.x +
                    "%; top: " +
                    user_pointer.y +
                    "%"}
                class="flex flex-col absolute pointer-events-none whitespace-nowrap overflow-hidden"
            >
                <svg
                    version="1.1"
                    width="25px"
                    height="25px"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 21 21"
                >
                    <polygon
                        fill="black"
                        points="8.2,20.9 8.2,4.9 19.8,16.5 13,16.5 12.6,16.6"
                    />
                    <polygon
                        fill="currentColor"
                        points="9.2,7.3 9.2,18.5 12.2,15.6 12.6,15.5 17.4,15.5"
                    />
                </svg>
            </li>
        </ul>
    {/if}
{/each}
