import formModel from "@/server/model/form.model";

export default defineEventHandler(async(event) => {
    const body = await readBody(event)
    const {name, email, mesg} = body;
    
    const form = new formModel({name, email, mesg});

    await form.save();

    return { success: true, body };
});


