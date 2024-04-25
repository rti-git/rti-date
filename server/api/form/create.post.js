import formModel from "@/server/model/form.model";

export default defineEventHandler(async(event) => {
    const body = await readBody(event)
    const {name, email, mesg, religiousPlace, phone, birthdate, location, area} = body;
    
    const form = new formModel({name, email, mesg, religiousPlace, phone, birthdate, location, area});

    await form.save();

    return { success: true, body };
});


