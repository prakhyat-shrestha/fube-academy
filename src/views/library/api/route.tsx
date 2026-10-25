
// const formData=formData;
// export async function GET(){
// return Response.json(formData)

// }

export async function POST(e,request:Request){
    const formData = await request.json(e);
    const newformData = {
        sl: formData.length+1,
        booktitle:e.target.value,
        isbn:e.target.value,
        catergory: e.target.value,
        publishername: e.target.value,
        authorname:e.target.value,
        quantity:e.target.value,
        price:e.target.value,
    }
    formData.push(newformData);
    return new Response(JSON.stringify(newformData),{
        headers:{"Content-Type":"application/json"},status:201,

    })
    

}
