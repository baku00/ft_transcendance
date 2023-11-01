<template>
	<div>
		<input type="text" v-model="email" placeholder="Email">
		<input type="text" v-model="password" placeholder="Mot de passe">
		<button @click="create">Créer</button>
		<ul>
			<li v-for="user in users">{{ user.email }}</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { User } from '~/utils/User/User.class';
import { Account } from '~/utils/Account/Account.class';
import { TAlert } from '~/types/alert';

const email = ref<string>('david.gloriod@protonmail.com');
const password = ref<string>('12341234');
const users = ref<User[]>([]);

function create()
{
	const alert: TAlert = {
		type: 'success',
		message: 'Compte créé avec succès',
	};

	try {
		const user = new User(email.value);
	} catch (error: any) {
		alert.type = 'error';
		alert.message = error.message;
	}

	addAlert(alert);
}

</script>