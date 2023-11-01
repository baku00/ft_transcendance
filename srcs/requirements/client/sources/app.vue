<template>
	<div>
		<VitePwaManifest/>
		<div id="app">
			<main>
				<AlertContainer>
					<Alert
						v-for="alert in getAlerts()"
						:id="alert._id"
						:alert="alert"
					/>
				</AlertContainer>
				<NuxtPage id="content"/>
			</main>
			<Navbar id="navbar"/>
		</div>
	</div>
</template>

<script setup lang="ts">
</script>

<style lang="css">

body {
	padding: 0;
	margin: 0;
}

</style>