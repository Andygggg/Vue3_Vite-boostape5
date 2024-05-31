<template>
  <div class="login_box">
    <div class="wrapper">
      <form action="">
        <h1>Login</h1>
        <div class="input_box">
          <input type="text" placeholder="UserName" v-model="user.account" required />
          <i class="bx bxs-user"></i>
        </div>
        <div class="input_box">
          <input type="password" placeholder="PassWord" v-model="user.password" required />
          <i class="bx bxs-lock-alt"></i>
        </div>
        <div class="remember_forget">
          <label> <input type="checkbox" />Remember me </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit" class="btn_login" @click="PushToProject">Login</button>
        <div class="register_link">
          <p>
            Don't have an account?
            <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = ref({
  account: '',
  password: '',
})

function PushToProject() {
  if (user.value.account === '123') {
    router.push({ name: 'Project' })
  } else {
    router.push({ name: 'HexSchoolFinal' })
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins');
.login_box {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url('@/assets/login.jpg') no-repeat;
  background-size: cover;
  background-position: center;
}
.wrapper {
  width: 420px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: #ffffff;
  border-radius: 10px;
  padding: 30px 40px;
}
.wrapper h1 {
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  color: rgb(0, 0, 0);
}
.wrapper .input_box {
  position: relative;
  width: 100%;
  height: 50px;
  margin: 30px 0;
}
.input_box input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  font-size: 16px;
  color: #ffffff;
  padding: 20px 45px 20px 20px;
}
.input_box input::placeholder {
  color: #ffffff;
}
.input_box i {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
}
.wrapper .remember_forget {
  display: flex;
  justify-content: space-between;
  font-size: 14.5px;
  margin: -15px 0 15px;
}
.remember_forget label input {
  accent-color: #ffffff;
  margin-right: 3px;
}
.remember_forget a {
  color: #ffffff;
  text-decoration: none;
}
.remember_forget a:hover {
  text-decoration: underline;
}
.wrapper .btn_login {
  width: 100%;
  height: 45px;
  background: #ffffff;
  border: none;
  outline: none;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 16px;
  color: #333;
  font-weight: 600;
}
.wrapper .btn_login:hover {
  background-color: black;
  color: #ffffff;
}
.wrapper .register_link {
  font-size: 14.5px;
  text-align: center;
  margin: 20px 0 15px;
}
.register_link p a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
}
.register_link p a:hover {
  text-decoration: underline;
}
</style>
