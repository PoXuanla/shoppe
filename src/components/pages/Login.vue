<template>
  <div>
    <form class="form-signin" @submit.prevent="login">
      <h1 class="h3 mb-3 fw-normal">請先登入</h1>

      <div class="form-floating">
        <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
    </form>
  </div>
</template>


<script>
  export default {
    name: 'login',
    data(){
        return {
            email : '',
            password : '',
            loginAPI : '',
        }
    },
    created() {
    },
    methods : {
        login(){
            const vm = this
            this.$http.post(vm.loginAPI, {
                username : vm.email,
                password : vm.password,
            })
            .then((response) => {
                if(response.data.success === true){
                    const token = response.data.token;
                    const expired = response.data.expired 
                    document.cookie = `hexToken=${token};expires=${new Date(expired)}`;
                    this.$router.push('/')
                    console.log("登入成功 跳轉畫面")
                }else{
                  console.log("登入失敗")
                }
            })
        },
    },
  }

</script>
<style scoped>
    html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>