<script>
    import { enhance } from '$app/forms';
    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<svelte:head>
    <title>Login</title>
    <meta charset="UTF-8">

</svelte:head>

<body>

<h1>Login</h1>
<div>
    <form use:enhance method="POST">
        <fieldset >
            <input

                    name="username"
                    type="text"
                    required
                    placeholder="Your Name"
            />
        </fieldset>

        <fieldset >
            <input

                    name="password"
                    type="password"
                    required
                    placeholder="Password"
            />
        </fieldset>
        <button type="submit"q>Sign up</button>
    </form>
<a>Already have an account ?</a>
</div>
</body>