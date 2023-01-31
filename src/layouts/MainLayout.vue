<script setup>
import TopNav from "@/components/navigation/TopNav.vue";
import NavDropList from "@/components/navigation/NavDropList.vue";
import NavDropItem from "@/components/navigation/NavDropItem.vue";
</script>

<template>
    <div class="min-h-screen">
        <TopNav>
            <NavDropList label="Home">
                <NavDropItem href="#">Home Link 1</NavDropItem>
                <NavDropItem href="#">Home Link 2</NavDropItem>
                <NavDropItem href="#">Home Link 3</NavDropItem>
            </NavDropList>
            <NavDropList label="Pages">
                <NavDropItem href="#">Pages Link 1</NavDropItem>
                <NavDropItem href="#">Pages Link 2</NavDropItem>
                <NavDropItem href="#">Pages Link 3</NavDropItem>
            </NavDropList>
            <NavDropList label="Movies and TV Shows">
                <NavDropItem href="#">Movie Link 1</NavDropItem>
                <NavDropItem href="#">TV Link 2</NavDropItem>
            </NavDropList>
            <NavDropList label="Blog">
                <NavDropItem href="#">Blog Link 1</NavDropItem>
                <NavDropItem href="#">Blog Link 2</NavDropItem>
                <NavDropItem href="#">Blog Link 3</NavDropItem>
            </NavDropList>
            <NavDropList label="Contact Us">
                <NavDropItem href="#">Contact Us Link 1</NavDropItem>
                <NavDropItem href="#">Contact Us Link 2</NavDropItem>
                <NavDropItem href="#">Contact Us Link 3</NavDropItem>
            </NavDropList>
        </TopNav>
        <slot></slot>
        <FooterNav>

        </FooterNav>
    </div>
</template>
