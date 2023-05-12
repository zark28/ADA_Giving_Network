<template>
    <main>
        <div class="login-img">
            <img src="/image/login-image.svg" alt="">
        </div>

        <div class="form-box">
            <header>
                <h1>Welcome Back!</h1>
                <h4>Reconnect with us!</h4>
            </header>

            <form action="">
                <div class="org-form">
                    <label for="">Email</label>
                    <input type="email" placeholder="Email">
                </div>

                <div class="org-form">
                    <label for="">Password</label>
                    <input type="password" placeholder="Password">
                </div>

                <p>Forgot passsword?</p>

                <button class="btn">Login</button>
            </form>
        </div>
    </main>
</template>

<script>
export default {
    name: 'AdaGivingNetworkSignInPage',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
    main {
        display: flex;
        align-items: center;
        width: 80%;
        margin: 0 auto;
        background-color: bisque;
    }

    .login-img {
        width: 50%;
        background-color: rgb(36, 49, 49);
    }

    .login-img img {
        width: 100%;
        object-fit:fill;
    }

    .form-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: aqua;
        height: 80vh;
        width: 50%;
        row-gap: 25px;
    }

    header {
        text-align: center;
    }

    .org-form {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: 0 auto;
        background-color: blue;
    }

    .org-form input {
        padding: 10px;
    }

    .btn {
        width: 100px;
        margin: 0 auto;
        padding: 8px 0 8px 0;
        font-size: 18px;
        font-weight: 600;
    }

    form p {
        margin: 0 auto;
    }
</style>