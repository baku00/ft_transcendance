<template>
	<Button
		class="edit-btn"
		:media_screen="media_screen"
		:icon="'edit'"
		:title="'Éditer'"
		:type="type"
	/>
</template>

<script setup lang="ts">
const { type, media_screen } = defineProps({
	type: {
		type: String as PropType<'submit' | 'button' | 'reset'>,
		default: 'submit'
	},
	media_screen: {
		type: Boolean,
		default: false
	}
});
</script>

<style scoped>
.edit-btn {
	background-color: #0364ff;
}

.edit-btn:hover {
	background-color: rgb(47, 47, 211);
}

.edit-btn:active {
	background-color: rgb(77, 77, 211);
}

</style>