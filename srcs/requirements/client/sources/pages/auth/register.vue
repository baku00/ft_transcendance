<template>
	<div>
		<NuxtLayout name="auth">
			<form @submit.prevent="submit" id="register-form">
				<div id="email-field" class="field">
					<input type="text" v-model="datas.email" placeholder="Email" required>
				</div>
				<div id="password-field" class="field">
					<input type="password" v-model="datas.password" placeholder="Mot de passe" required>
				</div>
				<div id="confirm-password-field" class="field">
					<input type="password" v-model="datas.confirm_password" placeholder="Mot de passe" required>
				</div>
				<div class="btns">
					<div>
						<button type="submit" id="btn-connect" class="btn">S'inscire</button>
					</div>
					<div id="register-link">
						<NuxtLink to="/auth/login" id="register-btn">Se connecter</NuxtLink>
					</div>
				</div>
			</form>
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">

import { Register, DefaultRegister } from '~/types/auth/register'

definePageMeta({
	title: 'Inscription',
});

const datas = ref<Register>(copy<Register>(DefaultRegister));
datas.value = {
	email: 'david.gloriod@protonmail.com',
	password: '12341234',
	confirm_password: '12341234',
}

async function submit() {
	await register(datas.value);
}

</script>

<style scoped lang="css">

#register-form {
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