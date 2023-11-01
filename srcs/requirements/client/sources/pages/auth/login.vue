<template>
	<div>
		<NuxtLayout name="auth">
			<form @submit.prevent="submit" id="login-form">
				<div id="email-field" class="field">
					<input type="text" v-model="datas.email" placeholder="Email">
				</div>
				<div id="password-field" class="field">
					<input type="password" v-model="datas.password" placeholder="Mot de passe">
				</div>
				<div class="btns">
					<div>
						<button type="submit" id="btn-connect" class="btn">Se connecter</button>
					</div>
					<div id="register-link">
						<NuxtLink to="/auth/register" id="register-btn">S'inscrire</NuxtLink>
					</div>
				</div>
			</form>
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">

import { Login, DefaultLogin } from '~/types/auth/login'

definePageMeta({
	title: 'Login',
});

const datas = ref<Login>(copy<Login>(DefaultLogin));

async function submit() {
	if (await login(datas.value))
		useRouter().push({ path: '/'})
}

</script>

<style scoped lang="css">

#login-form {
	background-color: white;
	box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
	border-radius: 15px;
	padding: 10px;
	padding-top: 30px;
	width: 300px;
	margin: auto;
	margin-top: 20px;
}

.field {
	margin: auto;
	width: 250px;
	margin-bottom: 10px;
	margin-top: 10px;
}

.field input {
	width: 100%;
	height: 50px;
	background-color: #E8E8E8;
	border-radius: 50px;
	padding-left: 30px;
	margin-left: -15px;
	border: none;
	font-size: large;
}

.btns {
	margin-top: 30px;
	width: 100%;
	text-align: center;
}

#btn-connect {
	background: linear-gradient(90deg, #3CA1FF 0%, #0057A8 100%);
	color: white;
	font-size: 20px;
	border-radius: 50px;
	width: 160px;
	height: 50px;
}

#register-btn {
	color: #000000;
	font-size: 16px;
	text-decoration: none;
}

#register-link {
	margin-top: 20px;
	margin-bottom: 20px;
}

</style>