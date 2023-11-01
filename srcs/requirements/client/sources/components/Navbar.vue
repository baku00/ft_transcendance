<template>
	<div>
		<ul>
			<!-- <li>
				<NuxtLink class="nav-link" :class="{'is-active': isEquals('/')}" to="/">
					<Icon class="icon" name="icon-park:home"/>
					<span>Accueil</span>
				</NuxtLink>
			</li>
			<li>
				<NuxtLink class="nav-link" :class="{'is-active': isActive('/te')}" to="/te/coming">
					<Icon class="icon" name="twemoji:writing-hand-medium-light-skin-tone"/>
					<span>Travaux écrits</span>
				</NuxtLink>
			</li>
			<li>
				<NuxtLink class="nav-link" :class="{'is-active': isActive('/schedules')}" to="/schedules/day">
					<Icon class="icon" name="noto-v1:calendar"/>
					<span>Horaires</span>
				</NuxtLink>
			</li>
			<li>
				<NuxtLink class="nav-link" :class="{'is-active': isActive('/persons')}" to="/persons/list">
					<Icon class="icon" name="streamline-emojis:family-man-man-boy-boy-2"/>
					<span>Personnes</span>
				</NuxtLink>
			</li> -->
		</ul>
	</div>
</template>

<script setup lang="ts">

function path()
{
	return useRouter().currentRoute.value.fullPath;
}

function isActive(link: string)
{
	return path().startsWith(link);
}

function isEquals(link: string)
{
	return path() === link;
}

</script>

<style scoped>
ul {
	display: flex;
	justify-content: space-between;
	font-size: 12px;
	padding: 0;
	margin: 10px;
	list-style-type: none;
}
.nav-link {
	color: #525252;
	text-decoration: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 100%;
}

.icon {
	font-size: 32px;
}

.nav-link.is-active {
	color: #008cff;
}
</style>