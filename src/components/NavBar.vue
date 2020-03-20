<template>
	<nav>
	 <router-link to="/landing" class="navItem navLogo">
		 <!--<img src="../../static/logo.png">-->
	 </router-link>
		<ul>
        <router-link tag="li"  to="/work" exact>
					<a>Works</a></router-link>
        <router-link tag="li" to="/aboutme">
					<a>About me</a></router-link>
      </ul>
</nav>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      activeColor: "var(--keyColor)",
			activeIndex: 'work',
			pages: [
        {
          id: 0,
          text: 'Works',
          page:'/works'
        },
        {
          id: 1,
          text: 'About Me',
          page:'/aboutme'
        },
      ]
    }
  }
}
</script>
<style>

nav {
	width: 100%;
	height: 100px;
	text-align: center;
	position:relative;
}

.navItem {
	display: inline-block;
}

.navLogo {
	top: 20px;
	left: 20px;
	position: absolute;
}

.navLogo img {
	width: 52px;
	height: 52px;
}

nav ul {
	margin: 0 ;
	padding: 0 ;
	display: inline-block;
	line-height: 100px;
	width: 60%;
}

nav ul li {
	list-style: none;
	display: inline-block;
	width: 18%;
	min-width: 90px;
}

nav ul li a	{
	text-decoration: none;
	color: #333;
	font-size: 1.75rem;
}

.router-link-active > a {
  color: #3550B2;
}

nav ul li a:hover {
	color: #AEB8DE;
	transition: 0.1s;
}
</style>
