<template>
	<div>
		<NuxtLink class="tab" :to="path" :class="{'is-active': startWith(path)}">{{ text }}</NuxtLink>
	</div>
</template>

<script setup lang="ts">
const { path } = defineProps({
	path: {
		type: String,
		required: true
	},
	text: {
		type: String,
		required: true
	}
});

function startWith(link: string)
{
	return useRoute().fullPath.startsWith(link);
}
</script>

<style scoped>
.tab {
	color: #525252;
	text-decoration: none;
}

.tab.is-active {
	color: #008cff;
	text-decoration: underline;
}
</style>