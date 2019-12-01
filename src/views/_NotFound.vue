<template>
<div class="nfpage">
    <v-card min-width="270px">
        <v-card-title>Page Not found<span>:(</span></v-card-title>
        <v-card-text class="text--primary">
            <div>The page you're looking for can't be found.</div>
            <div>You may have mistyped the address or the page may have moved.</div>
        </v-card-text>
        <v-card-actions>
            <v-btn text to="/">Go to Top</v-btn>
        </v-card-actions>
    </v-card>
</div>
</template>

<style>
    .nfpage {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translateY(-50%) translateX(-50%);
        transform: translateY(-50%) translateX(-50%);
    }
</style>