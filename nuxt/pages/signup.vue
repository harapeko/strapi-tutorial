<template>
  <div class="w-4/5 mx-auto md:w-1/2 text-center my-12">
    <div v-show="error !== ''" class="p-3 border">
      <p>{{ error }}</p>
    </div>
    <h1 class="font-bold text-2xl md:text-4xl mt-5">Signup</h1>

    <form @submit="createUser">
      <div>
        <input
          v-model="email"
          type="text"
          class="p-3 my-5 border w-full"
          placeholder="email"
        />
      </div>
      <div>
        <input
          v-model="username"
          type="text"
          class="p-3 my-5 border w-full"
          placeholder="username"
        />
      </div>
      <div>
        <input
          v-model="password"
          type="text"
          class="p-3 my-5 border w-full"
          placeholder="password"
        />
      </div>
      <div>
        <button
          class="button--green"
          :disabled="email === '' || password === '' || username === ''"
          type="submit"
        >
          Signup
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      username: '',
      password: '',
      error: '',
    }
  },
  methods: {
    async createUser(e) {
      e.preventDefault()
      try {
        const newUser = await this.$strapi.register({
          email: this.email,
          username: this.username,
          password: this.password,
        })
        console.log({ newUser })
        if (newUser !== null) {
          this.error = ''
          this.$nuxt.$router.push('/articles')
        }
      } catch (error) {
        this.error = error.message
      }
    },
  },
  middleware: 'authenticated',
}
</script>
