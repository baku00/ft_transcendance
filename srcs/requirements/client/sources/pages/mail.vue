<template>
	<div>
		<form @submit.prevent="submit">
			<div id="field-to">
				<label for="to">Destinataire</label>
				<input type="text" v-model="datas.to" placeholder="Destinataire" required>
			</div>
			<div id="field-subject">
				<label for="subject">Sujet</label>
				<input type="text" v-model="datas.subject" placeholder="Sujet" required>
			</div>
			<div id="field-text">
				<label for="text">Contenu</label>
				<textarea v-model="datas.text" placeholder="Contenu" required></textarea>
			</div>
			<div id="btns">
				<button type="submit">Envoyer</button>
			</div>
		</form>
		<ul id="mails">
			<li v-for="mail in mails" v-bind:key="mail._id">
				<div>{{ Math.random() }}</div>
				<div>{{ mail.to }}</div>
				<div>{{ mail.subject }}</div>
				<div>{{ mail.text }}</div>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { TAlert } from '~/types/alert';
import { tMail, DefaultMail } from '~/types/mail';

definePageMeta({
	title: 'Mail',
});

const datas = ref<tMail>(copy<tMail>(DefaultMail));
const mails = ref<tMail[]>([]);

async function submit()
{
	await sendMail(datas.value);
	mails.value = await getMails();
}

</script>