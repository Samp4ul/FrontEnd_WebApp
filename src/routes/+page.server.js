import {redirect} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({parent }) {
    const { user } = await parent();
    throw redirect(307, '/locations');
}