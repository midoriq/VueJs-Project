<template>
    <div class="home">
        <div class="map">
            <img src="../assets/mapa_polski.png" alt="" />
            <div class="cityMark warszawa" v-on:click="ShowDetails"></div>
            <div class="cityMark radom" v-on:click="ShowDetails"></div>
            <div class="cityMark bialystok" v-on:click="ShowDetails"></div>
            <div class="cityMark gdansk" v-on:click="ShowDetails"></div>
            <div class="cityMark szczecin" v-on:click="ShowDetails"></div>
            <div class="cityMark bydgoszcz" v-on:click="ShowDetails"></div>
            <div class="cityMark wroclaw" v-on:click="ShowDetails"></div>
            <div class="cityMark krakow" v-on:click="ShowDetails"></div>
        </div>
        <div class="text">
            <div class="info">
                <h1><span>about</span> us</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi asperiores culpa earum perferendis! Inventore, numquam
                    placeat. Earum autem nihil, vitae assumenda, corporis
                    voluptatum blanditiis, esse necessitatibus officia veritatis
                    eveniet iste eligendi quasi eum incidunt! Harum consequuntur
                    blanditiis rerum recusandae temporibus cupiditate, autem
                    debitis labore vitae aut magnam earum! Beatae voluptate
                    perspiciatis rerum vero accusamus a dolore error quia sint
                    nisi? Quaerat distinctio veniam autem voluptates ut fugit
                    dolores quidem. Doloremque laborum minus accusantium neque
                    illo unde enim ea? Deserunt, repellendus voluptate eveniet
                    in, veritatis quisquam quaerat suscipit maxime quae labore
                    natus? Cumque ut, sed molestias corporis iusto doloremque
                    recusandae magni.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    background-color: #8fbbaf;
    height: 100%;
}

.home {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.map {
    position: relative;
}

.map img {
    max-width: 550px;
}

.map .cityMark {
    width: 4px;
    height: 4px;
    background-color: black;
    border-radius: 50%;

    position: absolute;
    transform: translate(-50%, -50%);
}

.text {
    width: 40%;
    visibility: hidden;
}

/*---Cities on map--- */
.warszawa {
    top: 43%;
    right: 30%;
}

.radom {
    top: 57%;
    right: 26%;
}

.bialystok {
    top: 30%;
    right: 12%;
}

.gdansk {
    top: 12%;
    right: 52%;
}

.szczecin {
    top: 23%;
    left: 5%;
}

.bydgoszcz {
    top: 33%;
    left: 40%;
}

.wroclaw {
    top: 64%;
    left: 30%;
}

.krakow {
    top: 77%;
    left: 62%;
}
</style>
