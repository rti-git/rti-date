import formModel from "@/server/model/form.model";

export default defineEventHandler(async(event) => {
 const body = await readBody(event);
 const{ _id } = body;

    await formModel.deleteOne({ _id })
    return { success: true };
});


