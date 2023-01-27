

import { redirect, fail } from '@sveltejs/kit';
import * as api from '$lib/api.js';
let body = null

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals,request,response }) {
    let token = request.headers.get("cookie")
    if(token!=null){
        token = token.substring(4);
    }
    //const body = await api.get('/locations', token);
    body = await api.get('locations', token);
};





