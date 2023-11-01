<template>
	<Button
		class="add-btn"
		:media_screen="media_screen"
		:icon="'add'"
		:title="title"
		:type="type"
	/>
</template>

<script setup lang="ts">
const { type, title, media_screen } = defineProps({
	type: {
		type: String as PropType<'submit' | 'button' | 'reset'>,
		default: 'submit'
	},
	title: {
		type: String,
		default: 'Ajouter'
	},
	media_screen: {
		type: Boolean,
		default: false
	}
});
</script>

<style scoped>
.add-btn {
	background-color: #00ba09;
}

.add-btn:hover {
	background-color: rgb(47, 211, 47);
}

.add-btn:active {
	background-color: rgb(77, 211, 77);
}

</style>