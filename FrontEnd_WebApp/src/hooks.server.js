/** @type {import('@sveltejs/kit').Handle} */
export function handle({ event, resolve }) {
    const jwt = event.cookies.get('jwt');
    event.locals.token = jwt ? jwt : null;

    return resolve(event);
}