<template>
    <div class="form_item md:w-1/2 p-2" v-for="form in data" :key="form._id">
      <div class="form_name">
        <div v-if="true" class="flex-wrap border-2 border-black p-2 mb-2">
          <div class="">{{ form.religiousPlace }}</div>
          <div>{{ form.email }}</div>
          <div>{{ form.birthdate.split('T')[0] }}</div>
          <div>{{ form.phone }}</div>
          <div>{{ form.location }}</div>
          <div>{{ form.area }}</div>
          <div>內容:{{ form.mesg }}</div>
          <div>名稱:{{ form.name }}</div>
        </div>
      </div>
      <!-- <button class="remove_btn border-2 border-red-950 m-1" @click="deleteform(form._id)">刪除</button> -->
    </div>
</template>


<script setup lang="ts">
const { data, refresh } = await useFetch("/api/form");

const deleteform = async (_id) => {
  await $fetch('/api/form/remove', {
    method: 'delete',
    body: {
      _id
    }
  });
  await refresh();
}
//const formdata = ref({
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
