

<script>
    import { enhance } from '$app/forms';
    /** @type {import('./$types').ActionData} */
    export let form;
    export let data
</script>


<style>
    *{
        background-color: #F6F6F6;
    }

</style>

<svelte:head>
    <title>Sign in</title>
</svelte:head>

<body>
<h2>Add a Location</h2>
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
<button onclick="window.location.href='/locations'">Return to Main</button>
</body>