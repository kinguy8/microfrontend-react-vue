<template>
  <div>
  <div>
    <h1>{{message}}</h1>
    <h3>Count: {{count}}</h3>
  </div>
  <div>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
  </div>

</template>

<script>
export default {
  name: 'App-Vue',
  data() {
    return {
      message: "Hello Vue!",
      count: 0,
    };
  },
  methods: {
    increment(){
      this.count++;
    },
    decrement(){
      this.count--;
    }
  }
};
</script>

<style>
</style>
