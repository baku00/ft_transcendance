<template>
	<button class="btn" :type="type">
		<Icon
			class="icon"
			:name="`material-symbols:${icon}`"
			v-if="show_icon"
		/>
		<span
			class="btn-text"
			:class="{'media-screen': media_screen}"
			v-if="show_title"
		>
			{{ title }}
		</span>
	</button>
</template>

<script setup lang="ts">
const { type, icon, title, media_screen, show_title, show_icon } = defineProps({
	type: {
		type: String as PropType<'submit' | 'button' | 'reset'>,
		default: 'submit'
	},
	icon: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true,
	},
	show_title: {
		type: Boolean,
		default: true
	},
	show_icon: {
		type: Boolean,
		default: true
	},
	media_screen: {
		type: Boolean,
		default: true
	}
});
</script>

<style scoped>
.btn {
	padding: 5px 8px;
	border: none;
	border-radius: 4px;
	color: white;
	font-size: 16px;
	cursor: pointer;
}

.icon {
	font-size: 20px;
}

@media screen and (max-width: 600px) {
	.media-screen {
		display: none;
	}
}

</style>