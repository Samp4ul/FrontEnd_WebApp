
import {base} from '$lib/api.js';
import { redirect, fail } from '@sveltejs/kit';
import * as api from '$lib/api.js';
import {data} from "../locations/+page.svelte";


/** @type {import('./$types').PageServerLoad} */
export async function load({ locals,url }) {
    let token = locals.jwt
    if(token==null)
    {
        throw redirect(307, '/login');
    }
    let role = JSON.parse(atob(token.split('.')[1])).role;
    if(role!='admin'){
        throw redirect(307, '/locations');
    }
    let para = url.searchParams.get('success')
    return {para}
};

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request,locals }) => {

        const data = await request.formData();

        const user = {

            _id : data.get('_id'),
            filmType : data.get('filmType'),
            filmProducerName : data.get('filmProducerName'),
            endDate : data.get('endDate'),
            filmName : data.get('filmName'),
            district : data.get('district'),
            sourceLocationId : data.get('sourceLocationId'),
            filmDirectorName : data.get('filmDirectorName'),
            address : data.get('address'),
            startDate : data.get('startDate'),
            year : data.get('year'),
            __v : data.get('__v')



        };

        const body = await api.post('locations/', user,locals.jwt);

        if (body.errors) {
            return fail(401, body);
        }
        throw redirect(307, '/add?success=true');


    }
};





