<template>
	<div>
		<header>
			<NuxtLink :to="getUser() ? '/' : '/auth/login'"><img id="logo" src="/logo.jpeg" alt="Logo"></NuxtLink>
			<span v-if="user">{{ getFullname(user) }}</span>
		</header>
	</div>
</template>

<script setup lang="ts">
import { Person } from '~/types/person';
import { getFullname } from '~/composables/usePerson';

const { user } = defineProps({
	user: {
		type: Object as PropType<Person>,
		required: false
	}
})

</script>

<style scoped>
header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background-color: white;
	height: 60px;
	font-size: 32px;
	font-weight: bold;
	padding-left: 10px;
	padding-top: 5px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

header span {
	text-align: center;
	width: 100%;
}

#logo, #disconnect {
	height: 100%;
	position: absolute;
	top: 0;
}
#disconnect {
	font-size: 35px;
	right: 5px;
}
</style>