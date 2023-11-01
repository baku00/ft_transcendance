<template>
	<div v-if="show">
		<div class="alert" :class="alert.type">
			<span class="close-btn" @click="removeAlert(alert._id as string)">&times;</span>
			<div class="title">
				<strong>{{ getAlertTitle() }}</strong>
			</div>
			<div class="content">
				{{ alert.message }}
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { PropType } from 'nuxt/dist/app/compat/capi';
import { TAlert } from 'types/alert';


const { shown, alert } = defineProps({
	alert: {
		type: Object as PropType<TAlert>,
		required: true
	},
	// message: {
	// 	type: String,
	// 	required: true
	// },
	// type: {
	// 	type: String,
	// 	required: false,
	// 	default: 'success'
	// },
	shown: {
		type: Boolean,
		required: false,
		default: true
	}
});

const show = ref<boolean>(shown);

function getAlertTitle()
{
	switch (alert.type) {
		case "success":
			return "Succès";

		case "error":
			return "Erreur";
		
		case "danger":
			return "Attention";

		case "info":
			return "Info";
	
		default:
			break;
	}
}

setTimeout(() => {
	removeAlert(alert._id as string);
}, alert.time ?? 5000);

</script>

<style scoped>
.alert {
	position: relative;
	right: 10px;
	padding: 10px;
	border-radius: 4px;
	color: white;
	width: 100%;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	margin-bottom: 10px;
}

.success {
	background-color: #4CAF50;
}

.error, .danger {
	background-color: #f44336;
}

.info {
	background-color: #ffea03;
}

strong {
	font-weight: bold;
}

.content {
	font-family: 'CFP Small';
}

.close-btn {
	position: absolute;
	top: 5px;
	right: 10px;
	font-size: 20px;
	cursor: pointer;
}

.close-btn:hover {
	color: rgba(255, 255, 255, 0.5);
}
</style>