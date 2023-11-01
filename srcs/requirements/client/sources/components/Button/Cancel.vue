<template>
	<Button
		class="cancel-btn"
		:media_screen="media_screen"
		:icon="'cancel'"
		:title="'Annuler'"
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
.cancel-btn {
	background-color: rgb(63, 63, 63); /* Couleur rouge pour les boutons de suppression */
}

.cancel-btn:hover {
	background-color: rgb(83, 83, 83); /* Couleur rouge foncé au survol */
}

.cancel-btn:active {
	background-color: rgb(73, 73, 73); /* Couleur rouge foncé au survol */
}

</style>