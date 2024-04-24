<template>
  <div
    class="flex flex-col text-rti_spot_title bg-rti_spot_bg text-2xl md:text-4xl md:gap-2 gap-8 p-16 px-8 sm:px-16 lg:px-64"
  >
    <main>
      <NuxtLink to="/formtext">填寫表單</NuxtLink>
    </main>
    <!-- <div
      class="flex flex-col md:flex-row justify-between items-center p-12 pb-8 lg:px-16"
    >
      <div class="flex text-3xl w-auto sm:w-1/2 md:w-1/3 pt-10">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdARvdvgaF96GeYd9uRm9McVHOUSb2qXeuO1C0LWAXIVO2Wsg/viewform"
          target="_blank"
        >
          <img
            src="../assets/images/gf_icon.png"
            class="pb-0 md:pl-0 scale-100 hover:scale-110 ease-in duration-200"
            alt=""
          />
        </a>
      </div>
      <div class="flex text-3xl w-auto sm:2/2 md:w-1/3 pt-10">
        <a href="https://wj.qq.com/s2/12994009/6f4a/" target="_blank">
          <img
            src="../assets/images/T_icon.png"
            class="scale-100 hover:scale-110 ease-in duration-200"
            alt=""
          />
        </a>
      </div>
    </div> -->
    <!-- <form @submit.prevent="submit">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="form.name" required />
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="form.email" required />
      <label for="mesg">Message:</label>
      <textarea id="mesg" v-model="form.mesg" required></textarea><br />
      <button type="submit">送出</button>
    </form> -->
  </div>
  <!-- <div class="form_bar">
    <div class="input_box">
      <input
        v-model="formData.name"
        class="info"
        type="text"
        placeholder="名字"
        required
      />
      <input
        v-model="formData.email"
        class="info"
        type="text"
        placeholder="信箱"
        required
      />
      <input
        v-model="formData.mesg"
        class="info"
        type="text"
        placeholder="內容"
      />
    </div>
    <button class="create" @click="createForm">新增</button>
  </div> -->


</template>

<script setup lang="ts">
const { data: formList, refresh } = await useFetch("/api/form");

const formData = ref({
  name: "",
  email: "",
  mesg: "",
});

const resetForm = () => {
  formData.value.name = "";
  formData.value.email = "";
  formData.value.mesg = "";
};

const createForm = async () => {
  await $fetch("/api/form/create", {
    method: "POST",
    body: {
      name: formData.value.name,
      email: formData.value.email,
      mesg: formData.value.mesg,
    },
  });
  refresh();
  alert("已送出");
  resetForm();
};

//  const submit = async () => {
//   try {
//     const response = await fetch('http://localhost:4567/submit', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(form.value),
//     });

//     if (response.ok) {
//       console.log('Form submitted successfully!');
//     } else {
//       console.error('Form submission failed!');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }
</script>
