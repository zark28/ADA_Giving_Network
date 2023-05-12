<template>
    <nav>
        <div class="logo">
            <h2>ADA</h2>
        </div>

        <ul class="nav-links">
            <li v-for="(item, index) in navLinks" :key="index">
                <router-link :to="item.path"> {{ item.name }} </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
           navLinks: [
                {name: "SignUp", path: "/signup"},
                {name: "SignIn", path: "/signIn"},
           ] 
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>


<style scoped>
    nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        margin: 0 auto;
        height: 8vh;
        
    }  

    .logo {
        font-family: 'Dancing Script', cursive;
        font-size: 20px;
        font-style: italic;
    }

    .nav-links {
        display: flex;
        justify-content: space-around;
        width: 20%;
    
    }
    .nav-links li {
        list-style: none;
    }

    .nav-links a {
        position: relative;
        text-decoration: none;
        letter-spacing: 2px;
        font-weight: bold;
        font-size: 16px;
        color: black;
    }

    .nav-links a::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    right: 0;
    margin: 0 auto;
    height: 3px;
    width: 10%;
    border-radius: 15px;
    background-color: rgb(65, 132, 240);
    transition: 0.25s ease-out;
}

.nav-links a:hover {
    color: rgb(65, 132, 240);
}

.nav-links a:hover::before {
    width: 100%;
}


@media screen and (max-width: 480px) {
    .nav-links {
        column-gap: 10px;
    }
}

</style>