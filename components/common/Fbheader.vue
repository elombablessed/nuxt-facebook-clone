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

        </div>
    </div>
</template>

<script>
    export default {
   
    }
  </script>

<style lang="css" scoped>
.header{
    margin: 0;
    padding: 0;
}
.header_left > img{
    height: 40px;
}

</style>