
import {base} from '$lib/api.js';
import { redirect, fail } from '@sveltejs/kit';
import * as api from '$lib/api.js';


/** @type {import('./$types').PageServerLoad} */
export async function load({ locals,request,response }) {
    let token = locals.jwt
    //const body = await api.get('/locations', token);
    let body = await api.get('locations', token);
    return {body,token,base}
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

        const body = await api.patch('locations/'+user._id, user,locals.jwt);

        if (body.errors) {
            return fail(401, body);
        }


    }
};





