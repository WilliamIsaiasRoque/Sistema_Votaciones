'use server';

export const getUser = async(token: string, email: string) => {
    try {

        const user = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/keycloak/user/search-email/${email}`, {
            method: 'GET',
            headers:  {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
    
        return await user.json();
    }catch(e) {
        console.log(`${e}`);
        // return e;
    }
};