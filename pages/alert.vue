<template>
  <div v-if="showAlert" class="custom-alert">
    <p>已送出</p>
    <button @click="closeAlert">關閉</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showAlert: false // 控制是否显示弹出窗口
    };
  },
  methods: {
    openAlert() {
      this.showAlert = true;
    },
    closeAlert() {
      this.showAlert = false;
    }
  }
};
</script>
