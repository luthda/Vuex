<template>
  <div>
        <input type="number" v-model.number="incrementBy">
    <button @click="incrementCount">Increment</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      incrementBy: 1
    }
  },
  methods: {
    incrementCount() {
      this.$store.dispatch('updateIncrement', this.incrementBy)
    }
  }
}
</script>
