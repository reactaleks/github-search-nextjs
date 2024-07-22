'use server'

export async function getData(prevState: any, formData: FormData) {
   const rawFormData = {
    userName: formData.get('userName')
   }
    const url = `https://api.github.com/users/${rawFormData.userName}`;
   try {
    const response = await fetch(url)
    if(!response.ok) {
        return {userData: {}, erroMsg: 'No results'}
    }
    return {userData: await response.json()};  

   } catch (err:any) {
    console.error(err.message);
   }

}