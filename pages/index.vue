<script setup>
// const { count, addCount } = useAddCount();
//const store = useHomeStore();

    const title = ref('與臺灣有約兩岸ING')
    useHead({
        title,
    })

</script>

<template>
  <Home />
  <Content />
  <Form />
  <Intr />
  <Footer />
  <!-- <div>
        <h1>首頁: {{ count }}</h1>
        <button @click="$event => store.add">add</button>
    </div> -->
</template>
