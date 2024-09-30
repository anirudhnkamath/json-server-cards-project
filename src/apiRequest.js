const apiRequest = async (url='', options=null, errmsg=null) => {
    try{
        const response = await fetch(url,options);
        if(!response.ok) throw Error("An error occurred. Please reload the page");
    } catch (err) {
        errmsg = err.message;
    } finally{
        return errmsg;
    }
}

export default apiRequest
