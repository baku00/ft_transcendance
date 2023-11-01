<template>
	<Button
		class="delete-btn"
		:media_screen="media_screen"
		:icon="'delete'"
		:title="title"
		:show_title="show_title"
		:type="type"
	/>
</template>

<script setup lang="ts">
const { type, media_screen, title, show_title } = defineProps({
	type: {
		type: String as PropType<'submit' | 'button' | 'reset'>,
		default: 'submit'
	},
	title: {
		type: String,
		default: 'Supprimer'
	},
	show_title: {
		type: Boolean,
		default: true
	},
	media_screen: {
		type: Boolean,
		default: false
	}
});
</script>

<style scoped>
.delete-btn {
	background-color: #f44336;
}

.delete-btn:hover {
	background-color: rgb(211, 47, 47);
}

.delete-btn:active {
	background-color: rgb(211, 77, 77);
}

</style>