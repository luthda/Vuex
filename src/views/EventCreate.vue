<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>This event is created by {{ user.name }}</p>
    <p>There are {{ catCount }} categories</p>
    <p>{{ getEvent(1) }}</p>
    <input type="number" v-model.number="incrementBy">
    <button @click="incrementCount">Increment</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      incrementBy: 1
    }
  },
  computed: {
    ...mapState(['categories', 'user']),
    ...mapGetters({
      catCount: 'categoriesLength',
      getEvent: 'getEventById'
    })
  },
  methods: {
    incrementCount() {
      this.$store.dispatch('updateIncrement', this.incrementBy)
    }
  }
}
</script>
