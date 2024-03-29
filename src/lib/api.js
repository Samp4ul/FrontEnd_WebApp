import {error, redirect} from '@sveltejs/kit';

export const base = 'https://webapp-back-qdk0.onrender.com';

async function send({ method, path, data, token }) {
    const opts = { method, headers: {} };

    if (data) {
        opts.headers['Content-Type'] = 'application/json';
        opts.body = JSON.stringify(data);
    }

    if (token) {
        opts.headers['Authorization'] = `Bearer ${token}`;
    }
    const res = await fetch(`${base}/${path}`, opts);
    if (res.ok || res.status === 422) {
        const text = await res.text();
        return text ? JSON.parse(text) : {};
    }
    if(res.status === 401){
        if(method==='POST'){
            throw redirect(302, `/login?error=true`);
        }
        throw redirect(302, `/login`);
    }
    if(res.status === 403){
        throw redirect(302, `/login`);
    }
    if(res.status === 400){
        throw redirect(302, `/login`);
    }


    throw error(res.status);
}

export function get(path, token) {
    return send({ method: 'GET', path, token });
}

export function del(path, token) {
    console.log(path,token)
    return send({ method: 'DELETE', path, token });
}

export function post(path, data, token) {
    return send({ method: 'POST', path, data, token });
}

export function patch(path, data, token) {
    return send({ method: 'PATCH', path, data, token });
}
