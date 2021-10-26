<template>
     <div class="greetings">
         <h1>¡Bienvenido {{username}} !</h1>
     </div>

</template>

<script>
export default {
    name: "Home",
    data: function(){
        return {
            username: localStorage.getItem('username') || "none"
        }
    }
}
</script>

<style>
    .greetings{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 300px;
    }
    .greetings h1{
        font-size: 50px;
        color: #283747;
    }

    @media only screen and (max-width: 400px) {
        .greetings h1{
        font-size: 2.3rem;
        color: #283747;
        }
    }
</style>