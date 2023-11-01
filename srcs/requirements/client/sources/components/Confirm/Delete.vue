<template>
	<div class="confirm-container">
		<div class="confirm">
			<div class="title">
				<h1 class="title-text">{{ title }}</h1>
			</div>
			<div class="content">
				{{ message }}
				<slot/>
			</div>
			<div class="buttons">
				<ButtonCancel @click="_cancel()"/>
				<ButtonDelete @click="_delete()"/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

const { title, message,  callback, allow, decline } = defineProps({
	title: {
		type: String,
		required: true
	},
	message: {
		type: String,
		required: true
	},
	callback: {
		type: Function,
	},
	allow: {
		type: Function,
	},
	decline: {
		type: Function,
	},
});

function _cancel()
{
	if (decline)
		decline(false);
	if (callback)
		callback(false);

}

function _delete()
{
	if (allow)
		allow(true);
	if (callback)
		callback(true);
}

</script>

<style scoped>
.confirm-container {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 100%;
	padding: 10px;
	color: white;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1000;
	display: flex;
	justify-content: center;
	align-items: center;
}

.confirm {
	position: relative;
	background-color: white;
	color: black;
	padding: 10px;
	border-radius: 4px;
}

.title {
	font-family: 'CFP Small';
	margin-bottom: 10px;
}

.title .title-text {
	margin: 0;
	font-size: 1.75rem;
}

.content {
	font-family: 'CFP Small';
	margin-bottom: 10px;
}

.close-btn {
	position: absolute;
	top: 75px;
	right: 40px;
	font-size: 40px;
	cursor: pointer;
}

.close-btn:hover {
	color: rgba(255, 255, 255, 0.5);
}

.buttons {
	display: flex;
	justify-content: space-between;
}
</style>