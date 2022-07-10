export const newPasswordFetch = async (formData: any) => {

    const response = await fetch("https://studapi.teachmeskills.by/auth/users/reset_password_confirm/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
    });

    if(response.ok) {     
        return 'ok'
    }
}