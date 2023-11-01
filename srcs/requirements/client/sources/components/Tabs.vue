<template>
	<div>
		<div class="tabs">
			<slot></slot>
		</div>
	</div>
</template>

<style scoped>
.tabs {
	display: flex;
	justify-content: space-between;
	max-width: 300px;
	background-color: white;
	padding: 13px;
	border-radius: 10px;
	margin: auto;
}
</style>