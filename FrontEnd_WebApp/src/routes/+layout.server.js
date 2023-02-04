/** @type {import('./$types').LayoutServerLoad} */
export function load({ locals }) {
    return {
        token: locals.token
        }
    };
