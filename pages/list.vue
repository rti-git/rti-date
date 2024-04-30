<template>

 <div class="">
    <div class="form_item" v-for="form in data" :key="form._id">
      <div class="flex form_name">
        <div v-if="true">
        {{ form.religiousPlace }},
        {{ form.birthdate.split('T')[0] }},
        {{ form.email }},
        {{ form.phone }},
        {{ form.location }},
        {{ form.area }}, </div>
        <div>內容:{{ form.mesg }}</div>
        <div>名稱:{{ form.name }}</div>
      </div>
    </div>
 </div>
</template>


<script setup lang="ts">
const { data } = await useFetch("/api/form");

//const formData = ref({
//  name: "",
//  religiousPlace: "",
//  email: "",
//  phone: "",
//  birthdate: "",
//  mesg: "",
//  location: "",
//  area: ""
//});

//const birthForm = formList.map(form => {
//  if (form.birthdate) {
//    form.birthdate = new Date(form.birthdate).toString().split('T')[0];
//  }
//  return form
//})
</script>


<style>
.form{
  background-color: #a6af94;
}
</style>
