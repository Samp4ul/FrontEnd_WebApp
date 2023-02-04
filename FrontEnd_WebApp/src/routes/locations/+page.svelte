<svelte:head>
    <title>Locations</title>
    <meta charset="UTF-8">

    <style>
        .location{
            background-color: #F6F6F6;
        }

        a.button1{
            display:inline-block;
            padding:0.35em 1.2em;
            border:0.1em solid #FFA3A7;
            margin:0 0.3em 0.3em 0;
            border-radius:0.12em;
            box-sizing: border-box;
            text-decoration:none;
            font-family:'Roboto',sans-serif;
            font-weight:300;
            color:#000000;
            text-align:center;
            transition: all 0.2s;
        }
        a.button1:hover{
            color:#000000;
            background-color:#FFE9EA;
        }
        @media all and (max-width:30em){
            a.button1{
                display:block;
                margin:0.4em auto;
            }
        }

        .menu {
            font-family: sans-serif;
            background-color: #F6F6F6;
            width: 68%;
            height: 50px;
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        @import url(https://fonts.googleapis.com/css?family=Montserrat:900|Raleway:400,400i,700,700i);
        /*** FONTS ***/
        /*** VARIABLES ***/
        /* Colors */
        /*** EXTEND ***/
        /* box-shadow */
        ol.gradient-list > li, ol.gradient-list > li::before {
            box-shadow: 0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05), 0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);
        }
        /*** STYLE ***/
        *, *:before, *:after {
            box-sizing: border-box;
        }
        html, body {
            margin: 0;
            padding: 0;
        }
        body {
            background-color: #fafafa;
            color: #1d1f20;
            font-family: 'Raleway', sans-serif;
        }
        main {
            display: block;
            margin: 0 auto;
            max-width: 40rem;
            padding: 1rem;
        }
        ul.gradient-list {
            counter-reset: gradient-counter;
            list-style: none;
            margin: 1.75rem 0;
            padding-left: 1rem;
        }
        ul.gradient-list > li {
            background: white;
            border-radius: 0 0.5rem 0.5rem 0.5rem;
            counter-increment: gradient-counter;
            margin-top: 1rem;
            min-height: 3rem;
            padding: 1rem 1rem 1rem 3rem;
            position: relative;
        }
        ul.gradient-list > li::before, ol.gradient-list > li::after {
            background: linear-gradient(135deg, #83e4e2 0%, #a2ed56 100%);
            border-radius: 1rem 1rem 0 1rem;
            content: '';
            height: 3rem;
            left: -1rem;
            overflow: hidden;
            position: absolute;
            top: -1rem;
            width: 3rem;
        }
        ul.gradient-list > li::before {
            align-items: flex-end;
            content: counter(gradient-counter);
            color: #1d1f20;
            display: flex;
            font: 900 1.5em/1 sans-serif;
            justify-content: flex-end;
            padding: 0.125em 0.25em;
            z-index: 1;
        }
        ul.gradient-list > li:nth-child(10n+1):before {
            background: linear-gradient(135deg, rgba(162, 237, 86, 0.2) 0%, rgba(253, 220, 50, 0.2) 100%);
        }
        ul.gradient-list > li:nth-child(10n+2):before {
            background: linear-gradient(135deg, rgba(162, 237, 86, 0.4) 0%, rgba(253, 220, 50, 0.4) 100%);
        }
        ul.gradient-list > li:nth-child(10n+3):before {
            background: linear-gradient(135deg, rgba(162, 237, 86, 0.6) 0%, rgba(253, 220, 50, 0.6) 100%);
        }
        ul.gradient-list > li:nth-child(10n+4):before {
            background: linear-gradient(135deg, rgba(162, 237, 86, 0.8) 0%, rgba(253, 220, 50, 0.8) 100%);
        }
        ul.gradient-list > li:nth-child(10n+5):before {
            background: linear-gradient(135deg, rgba(162, 237, 86, 1) 0%, rgba(253, 220, 50, 1) 100%);
        }
        ul.gradient-list > li:nth-child(10n+6):before {
            background: linear-gradient(135deg, rgba(162, 237, 86, 0.8) 0%, rgba(253, 220, 50, 0.8) 100%);
        }
        ul.gradient-list > li:nth-child(10n+7):before {
            background: linear-gradient(135deg, rgba(162, 237, 86, 0.6) 0%, rgba(253, 220, 50, 0.6) 100%);
        }
        ul.gradient-list > li:nth-child(10n+8):before {
            background: linear-gradient(135deg, rgba(162, 237, 86, 0.4) 0%, rgba(253, 220, 50, 0.4) 100%);
        }
        ul.gradient-list > li:nth-child(10n+9):before {
            background: linear-gradient(135deg, rgba(162, 237, 86, 0.2) 0%, rgba(253, 220, 50, 0.2) 100%);
        }
        ul.gradient-list > li:nth-child(10n+10):before {
            background: linear-gradient(135deg, rgba(162, 237, 86, 0) 0%, rgba(253, 220, 50, 0) 100%);
        }
        ul.gradient-list > li + li {
            margin-top: 2rem;}

    </style>

</svelte:head>

<div id="json-data"></div>

<script>
    /** @type {import('./$types').ActionData} */
    export let form;
    import { enhance } from '$app/forms';
    /** @type {import('./$types').PageData} */
    export let data;
    let elements = data.body
    import * as api from '$lib/api.js';

    let role = JSON.parse(atob(data.token.split('.')[1])).role;

    async function deleteLocation(id) {
        let token = data.token
        //const body = await api.get('/locations', token);
        await api.del('locations/'+id, token);
        location.reload()
    };

    function refreshWithDelay() {
        setTimeout(function(){
            window.location.replace(window.location.href);
        }, 1000);
    }

    let showAdd = false;


</script>


<body class="location">

<a href="/logout" class="button1">Log Out</a>

<div class="menu">
<h1>Locations</h1>
{#if role=='admin'}
    <button class="button2" on:click={() => {showAdd = !showAdd}}>Add a Location</button>
    {#if showAdd}

        <form use:enhance method="POST">

            <label>_id : <input type="text" placeholder="_id" name="_id" readonly/></label>


            <label><br>Film Type : <input type="text" placeholder="Film Type" name="filmType" required /></label>

            <label><br>Film Producer Name :
                <input type="text" placeholder="Film Producer Name" name="filmProducerName" required /></label>

            <label><br>End Date :
                <input type="text" placeholder="End Date" name="endDate" required /></label>

            <label><br>Film Name :
                <input type="text" placeholder="Film Name" name="filmName" required  /></label>

            <label><br>District : <input type="text" placeholder="District" name="district" required />
            </label>

            <label><br>Source Location ID :
                <input type="text" placeholder="Source Location ID" name="sourceLocationId" required /></label>

            <label><br>Film Director Name :
                <input type="text" placeholder="Film Director Name" name="filmDirectorName" required /></label>

            <label><br>Adress :
                <input type="text" placeholder="Address" name="address" required /></label>

            <label><br>Start Date :
                <input type="text" placeholder="Start Date"name="startDate" required /></label>

            <label><br>Year :
                <input type="text" placeholder="Year" name="year" required /></label>

            <label><br>__v :
                <input type="text" placeholder="__v" name="__v" readonly/></label>
            <button type="submit">Add</button>
        </form>

        {/if}
    {/if}
<div class="menu">
<ul class="gradient-list">
    {#each elements as element}

        <li>
            <p on:click={() => {element.showDetails = !element.showDetails}}>{element._id} - {element.filmName}</p>

            {#if element.showDetails}
                {#if role=='admin'}


                <form use:enhance method="POST">

                    <label>_id : <input type="text" placeholder="_id" value={element._id} name="_id" readonly/></label>


                    <label><br>Film Type : <input type="text" placeholder="Film Type" value={element.filmType} name="filmType" required /></label>

                    <label><br>Film Producer Name :
                        <input type="text" placeholder="Film Producer Name" value={element.filmProducerName} name="filmProducerName" required /></label>

                    <label><br>End Date :
                        <input type="text" placeholder="End Date" value={element.endDate} name="endDate" required /></label>

                    <label><br>Film Name :
                        <input type="text" placeholder="Film Name" value={element.filmName} name="filmName" required  /></label>

                    <label><br>District : <input type="text" placeholder="District" value={element.district} name="district" required />
                    </label>

                    <label><br>Source Location ID :
                        <input type="text" placeholder="Source Location ID" value={element.sourceLocationId} name="sourceLocationId" required /></label>

                    <label><br>Film Director Name :
                        <input type="text" placeholder="Film Director Name" value={element.filmDirectorName} name="filmDirectorName" required /></label>

                    <label><br>Adress :
                        <input type="text" placeholder="Address" value={element.address} name="address" required /></label>

                    <label><br>Start Date :
                        <input type="text" placeholder="Start Date" value={element.startDate} name="startDate" required /></label>

                    <label><br>Year :
                        <input type="text" placeholder="Year" value={element.year} name="year" required /></label>

                    <label><br>__v :
                        <input type="text" placeholder="__v" value={element.__v} name="__v" readonly/></label>
                    <button type="submit">Save Edit</button>
                    <button on:click={deleteLocation(element._id)}>Delete</button>

                </form>
                {/if}
                {#if role!='admin'}
                <p>_id: {element._id}</p>
                <p>Film Type: {element.filmType}</p>
                <p>Film Producer Name: {element.filmProducerName}</p>
                <p>End Date: {element.endDate}</p>
                <p>Film Name: {element.filmName}</p>
                <p>District: {element.district}</p>
                <p>Source Location ID: {element.sourceLocationId}</p>
                <p>Film Director Name: {element.filmDirectorName}</p>
                <p>Address: {element.address}</p>
                <p>Start Date: {element.startDate}</p>
                <p>Year: {element.year}</p>
                <p>__v: {element.__v}</p>
                    {/if}
            {/if}
        </li>

    {/each}
</ul>
</div>
</div>
</body>
