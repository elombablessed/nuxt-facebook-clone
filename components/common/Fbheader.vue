<template>
    <div class="header">
        <div class="header_left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="">
            
            <div class="header_input">
                <input type="text" placeholder="Search">
               
            </div>
        
        </div>
        <div class="header_middle">
           <div class="header_icons">
               <!-- Home Icon -->
               <v-icon>home</v-icon>
           </div>
           <div class="header_icons">
               <!-- Flag Icon -->
               <v-icon>flag</v-icon>
           </div>
           <div class="header_icons">
               <!-- Subscriptions Outline Icon -->
               <v-icon>subscrib</v-icon>
           </div>
           <div class="header_icons">
               <!-- Store Front Icon -->
               <v-icon>store</v-icon>
           </div>
           <div class="header_icons">
               <!-- Supervised User Circle Icon -->
               <v-icon>user</v-icon>
           </div>
        </div>
        <div class="header_right">
            <div class="header_info">
                <v-avatar>
                    <img
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        alt="John"
                    >
                </v-avatar>
            </div>
                <h4>Ell B7</h4>
                <v-icon>add</v-icon>
                <v-icon>forum</v-icon>
                <v-icon>notification</v-icon>
                <v-icon>more</v-icon>
        </div>
    </div>
</template>

<script>
    export default {
   
    }
  </script>

<style lang="css" scoped>
.header{
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    position: sticky;
    background-color: white;
    z-index: 100;
    top: 0;
    box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
   
}
.header_left{
    display: flex;
    justify-content: space-evenly;
}
.header_left > img{
    height: 40px;
}
.header_input{
    display: flex;
    align-items: center;
    background-color: #eff2f5;
    padding: 10px;
    margin-left: 10px;
    border-radius: 999px;
}
.header_input > input{
    
    outline-width: 0;
    background-color: transparent;
    border: none;
}

.header_middle{
    display: flex;
    flex: 1;
    justify-content: center;
}
.header_icons:hover > v-icon{
    color: #2e81f4;
}
.header_icons{
    display: flex;
    align-items: center;
    padding: 0 30px;
    cursor: pointer;
}
.header_icons:hover{
    background-color: #eff2f5;
    border-radius: 10px;
    align-items: center;
    padding: 0 30px;
    border-bottom: none;
}
.header_info{
    display: flex;
    align-items: center;
}
.header_info > h4{
   margin-left: 10px;
}
.header_right{
    display: flex;
}
</style>