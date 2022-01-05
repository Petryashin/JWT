<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">name</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr :key ='fruit.id' v-for="fruit in fruits">
          <th scope="row">{{fruit.id}}</th>
          <td>{{fruit.name}}</td>
          <td>{{fruit.price}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruits: null,
    };
  },
  methods: {
    getFruits() {
      axios.get("/api/fruits").then((res) => (this.fruits = res.data.data));
    },
  },
  mounted() {
      this.getFruits()
  }
};
</script>
