<template>
  <div>
    <input
      v-model="name"
      type="text"
      class="form-control mb-3"
      placeholder="name"
    />
    <input
      v-model="email"
      type="email"
      class="form-control mb-3"
      placeholder="email"
    />
    <input
      v-model="password"
      type="password"
      class="form-control mb-3"
      placeholder="password"
    />
    <input
      v-model="password_conf"
      type="password"
      class="form-control mb-3"
      placeholder="confirm password"
    />
    <input @click.prevent="store" type="submit" class="btn btn-primary" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      password: null,
      password_conf: null,
    };
  },
  methods: {
    store() {
      axios.post("/api/users", {
        name: this.name,
        email: this.email,
        password: this.password,
        password_conf: this.password_conf,
      }).then(res =>console.log(res));
    },
  },
  mounted() {},
};
</script>
