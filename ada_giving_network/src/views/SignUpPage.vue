<template>
    <div class="container">
        <header>
            <h1>Sign Up And Become a part of our network!</h1>
        </header>
        
        <main>
            <div class="form-box">
                <form @submit.prevent="savaData">
                    <div class="org-form">
                        <label for="">Organization Name</label>
                        <input type="text" required v-model="donorSignUp.organizationName" placeholder="Organization Name">
                    </div>

                    <div class="name-form">
                        <div>
                            <label for="">First Name</label>
                            <input type="text" required v-model="donorSignUp.firstName" placeholder="First Name">
                        </div>

                        <div>
                            <label for="">Last Name</label>
                            <input type="text" required v-model="donorSignUp.lastName" placeholder="Last Name">
                        </div> 
                    </div>

                    <div class="org-form">
                        <label for="">Organization Email</label>
                        <input type="email" required v-model="donorSignUp.email" placeholder="Organization Email">
                    </div>

                    <div class="org-form">
                        <label for="">Password</label>
                        <input type="password" required v-model="donorSignUp.password" placeholder="Password">
                    </div>

                    <button class="btn" v-on:click="signup">Sign Up</button>

                    <p>Already have a ADA account? <span><router-link to="/signin">Log In</router-link></span></p>
                </form>
            </div>

            <div class="logo-img">
                <img src="/image/form-image.svg" alt="">
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'SignUpPage',

    data() {
        return {
            donorSignUp: {
                organizationName: "",
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            }

        };
    },

    mounted() {
        
    },

    methods: {
        signup () {
            
        }
    },
};
</script>

<style scoped>

    header {
        position: relative;
        margin-top: 30px;
    }

    header h1 {
        text-align: center;
    }

    header h1::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    right: 0;
    margin: 0 auto;
    height: 3px;
    width: 30%;
    border-radius: 15px;
    background-color: rgb(65, 132, 240);
    transition: 0.25s ease-out;
}

    main {
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 80vh;
        align-content: center;
        /* justify-items: center; */
        width: 80%;
        margin: 0 auto;
    }

    main h1 {
        text-align: center;
    }

    .logo-img {
        width: 100%;
        z-index: 1;
    }

    .form-box {
        border-right: 2px solid white;
        z-index: 9;
        font-size: 20px;
    }

    .form-box >form{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 90%;
    }

    .logo-img img {
        width: 100%;
        height: 100%;
    }

    .org-form {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: 0 auto;
    }

    .org-form input {
        padding: 10px;
    }

    .name-form {
        display: flex;
        flex-direction: row;
        width: 80%;
        margin: 0 auto;
        justify-content: space-between;
    }

    .name-form div {
        display: flex;
        flex-direction: column;
    }

    .name-form input {
        padding: 10px;
    }

    .btn {
        width: 100px;
        margin: 0 auto;
        padding: 8px 0 8px 0;
        font-size: 18px;
        font-weight: 600;
    }

    .form-box p {
        margin: 0 auto;
    }
    
</style>