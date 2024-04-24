<template>
  <div
    class="mx-auto block max-w-md rounded-lg bg-white p-6 shadow-4 dark:bg-surface-dark"
  >
    <!--Name input-->
    <div class="relative mb-6" data-twe-input-wrapper-init>
      <label for="exampleInput7" class="pointer-events-none left-3 top-0 mb-0"
        >姓名:
      </label>
      <input
        type="text"
        class="peer block min-h-[auto] w-full bg-gray-300 rounded border-0"
        id="exampleInput7"
        v-model="formData.name"
        required
      />
    </div>

    <!--Email input-->
    <div class="relative mb-6" data-twe-input-wrapper-init>
      <label for="exampleInput8" class="pointer-events-none left-3 top-0 mb-0"
        >Email:
      </label>
      <input
        type="email"
        class="peer block min-h-[auto] w-full bg-gray-300 rounded border-0"
        id="exampleInput8"
        v-model="formData.email"
        required
      />
    </div>

    <!--Message textarea-->
    <div class="relative mb-6" data-twe-input-wrapper-init>
      <label
        for="exampleFormControlTextarea13"
        class="pointer-events-none left-3 top-0 mb-0 max-w-[90%]"
        >內容
      </label>
      <textarea
        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleFormControlTextarea13"
        rows="3"
        v-model="formData.mesg"
        placeholder=""
        required
      ></textarea>
    </div>

    <!--Submit button-->
    <button
      type="submit"
      class="inline-block w-full rounded bg-red-300 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-red shadow-primary-3"
      @click="createForm"
    >
      發送
    </button>
  </div>

  <div class="form">
    <div class="form_item" v-for="form in formList" :key="form._id">
      <div class="form_name">
        <p v-if="true">{{ form.name }}</p>
        <input v-else type="text" class="name_info" />
      </div>
    </div>
    <div class=""></div>
  </div>
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
