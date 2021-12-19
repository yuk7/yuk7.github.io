<template>
<v-container class="nfpage">
    <v-card max-width="600px" class="card">
        <v-card-title>Page Not found<span>:(</span></v-card-title>
        <v-card-text class="text--primary">
            <div>The page you're looking for can't be found.</div>
            <div>You may have mistyped the address or the page may have moved.</div>
        </v-card-text>
        <v-card-actions>
            <v-btn to="/">Go to Top</v-btn>
        </v-card-actions>
    </v-card>
</v-container>
</template>

<style>
    .nfpage {
        height: 40vh;
    }
    .card {
        top: 50%;
        margin: 10px auto;
    }
</style>