<template>
	<Button
		class="check-btn"
		:class="{'need-validation-btn': !validated}"
		:media_screen="media_screen"
		:icon="'check-box-outline'"
		:title="title"
		:type="type"
		:show_icon="show_icon"
	/>
</template>

<script setup lang="ts">
const { type, validated, title, media_screen, show_icon } = defineProps({
	type: {
		type: String as PropType<'submit' | 'button' | 'reset'>,
		default: 'submit'
	},
	show_icon: {
		type: Boolean,
		default: true
	},
	validated: {
		type: Boolean,
		default: false
	},
	title: {
		type: String,
		default: 'Valider'
	},
	media_screen: {
		type: Boolean,
		default: false
	}
});
</script>

<style scoped>
.check-btn {
	background-color: #00ba09;
}

.check-btn:hover {
	background-color: rgb(47, 211, 47);
}

.check-btn:active {
	background-color: rgb(77, 211, 77);
}

.need-validation-btn {
	background-color: #f44336;
}

.need-validation-btn:hover {
	background-color: rgb(211, 47, 47);
}

.need-validation-btn:active {
	background-color: rgb(211, 77, 77);
}

</style>