import formModel from "@/server/model/form.model";

export default defineEventHandler(async(event) => {
 const form = await formModel.find({});
 return form;
});


