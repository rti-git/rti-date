<template>
  <div
    class="form mx-auto block w-full md:w-1/2 p-6 shadow-4 dark:bg-surface-dark"
  >
  <form @submit.prevent="createForm">
    <!--Region input-->
    <div class="relative mb-8 text-2xl" data-twe-input-wrapper-init>
      <div class="pb-4">你心中最具代表的台灣宗教勝地 </div>
      <label v-for="(place, index) in religiousPlaces" :key="index" class="flex text-xl top-0 mb-0 pt-2"
        >
          {{ index + 1 }}   {{ place }}
          <input
            type="radio"
            class="bg-gray-300 ml-2"
            :id="'place' + (index + 1)"
            name="religiousPlace"
            :value="place"
            v-model="formData.religiousPlace"
            required
          />
      </label>
    </div>

    <!--Message textarea-->
    <div class="relative mb-6" data-twe-input-wrapper-init>
      <label
        for="exampleFormControlTextarea13"
        class="pointer-events-none left-3 op-0 mb-0 max-w-[90%]"
        >寫下你對這個台灣宗教勝地的獨特體驗或想法(必填)
      </label>
      <textarea
        class="peer block min-h-[auto] w-full rounded border-2 border-red-200 bg-transparent px-3  outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleFormControlTextarea13"
        rows="3"
        v-model="formData.mesg"
        placeholder=""
        required
      ></textarea>
    </div>

    <!--Name input-->
    <div class="relative mb-6" data-twe-input-wrapper-init>
      <label for="exampleInput7" class="pointer-events-none left-3 top-0 mb-0"
        >姓名(暱稱)
      </label>
      <input
        type="text"
        class="peer block min-h-[auto] w-full bg-gray-300 rounded border-0"
        id="exampleInput7"
        v-model="formData.name"
        required
      />
    </div>

    <!-- Date input -->
    <div class="relative mb-6" data-twe-input-wrapper-init>
      <label for="birthdate" class="block">出生年月日(必填)</label>
      <input
        type="date"
        id="birthdate"
        name="birthdate"
        v-model="formData.birthdate"
        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        required
      />
    </div>

    <!--Email input-->
    <div class="relative mb-6" data-twe-input-wrapper-init>
      <label for="exampleInput8" class="pointer-events-none left-3 top-0 mb-0"
        >Email(必填)
      </label>
      <input
        type="email"
        class="block min-h-[auto] w-full bg-gray-300 rounded border-0"
        id="exampleInput8"
        v-model="formData.email"
        required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      />
    </div>

    <!-- Phone input -->
    <div class="relative mb-6" data-twe-input-wrapper-init>
      <label for="phone" class="block">電話(選填)</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        v-model="formData.phone"
        pattern="[0-9]{1,10}"
        class="block w-full rounded-md border-gray-800 bg-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        maxlength="10"
      />
    </div>

    <!--Location input-->
    <div class="relative mb-6" data-twe-input-wrapper-init>
      <label for="exampleInput7" class="pointer-events-none left-3 top-0 mb-0"
        >所在地(選填)
      </label>
      <input
        type="text"
        class="peer block min-h-[auto] w-full bg-gray-300 rounded border-0"
        id="exampleInput7"
        v-model="formData.location"
      />
    </div>

    <!--Area input-->
    <div class="relative mb-6" data-twe-input-wrapper-init>
      <label for="exampleInput7" class="pointer-events-none left-3 top-0 mb-0"
        >地理位置和國家地區(必填)
      </label>
      <input
        type="text"
        class="peer block min-h-[auto] w-full bg-gray-300 rounded border-0"
        id="exampleInput7"
        v-model="formData.area"
        required
      />
    </div>

    <!--Submit button-->
    <button
      type="submit"
      class="inline-block w-full rounded bg-red-300 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-red shadow-primary-3"
    >
      發送
    </button>
  </form>
</div>

 <!-- <div class="form">
    <div class="form_item" v-for="form in formList" :key="form._id">
      <div class="form_name">
        <p v-if="true">{{ form.name }}</p>
        <input v-else type="text" class="name_info" />
      </div>
    </div>
 </div>-->
</template>

<script setup lang="ts">
const { data: formList, refresh } = await useFetch("/api/form");

const formData = ref({
  name: "",
  religiousPlace: "",
  email: "",
  phone: "",
  birthdate: "",
  mesg: "",
  location: "",
  area: ""
});

const religiousPlaces = [
      "屏東東隆宮",
      "台南大天后宮",
      "北港朝天宮",
      "大甲鎮澖宮",
      "白沙屯拱天宮",
      "屏東萬金天主堂",
      "高雄佛光山",
      "埔里中台山",
      "台北艋舺龍山寺",
      "台北清真寺"
    ];

const resetForm = () => {
  formData.value.religiousPlace = "";
  formData.value.name = "";
  formData.value.email = "";
  formData.value.mesg = "";
  formData.value.birthdate= "";
  formData.value.phone = "";
  formData.value.location = "";
  formData.value.area = ""
};

const createForm = async () => {
  await $fetch("/api/form/create", {
    method: "POST",
    body: {
      name: formData.value.name,
      religiousPlace: formData.value.religiousPlace,
      email: formData.value.email,
      mesg: formData.value.mesg,
      phone: formData.value.phone,
      birthdate: formData.value.birthdate,
      location: formData.value.location,
      area: formData.value.area
    },
  });
  refresh();
  alert("已送出");
  resetForm();
};


//const bir = formData.birthdate.toDateString().split('T')[0];
console.log(formData.birthdate);

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


<style>
.form{
  background-color: #a6af94;
}
</style>
