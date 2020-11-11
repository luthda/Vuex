<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>This event is created by {{ user.name }}</p>
    <p>There are {{ catCount }} categories</p>
    <p>{{ getEvent(1) }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState(['categories', 'user']),
    ...mapGetters({
      catCount: 'categoriesLength',
      getEvent: 'getEventById'
    })
  }
}
</script>
