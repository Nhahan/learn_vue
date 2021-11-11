function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
        };
    },
    computed: {
        monsterBarStyle() {
            if (this.monsterHealth < 0) {
                return {
                    width: "0%",
                };
            }
            return {
                width: this.monsterHealth + "%",
            };
        },
        playerBarStyle() {
            if (this.playerHealth < 0) {
                return {
                    width: "0%",
                };
            }
            return {
                width: this.playerHealth + "%",
            };
        },
        mayUseSpecialAttack() {
            if (this.currentRound == 0) {
                return true;
            }
            return this.currentRound % 3 !== 0;
        },
    },
    watch: {
        palyerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                // A draw
                this.winner = "draw";
            } else if (value <= 0) {
                // Player lost
                this.winner = "monster";
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                // A draw
                this.winner = "draw";
            } else if (value <= 0) {
                // Monster lost
                this.winenr = "player";
            }
        },
    },
    methods: {
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.currentRound = 0;
        },
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 12);
            this.playerHealth -= attackValue;
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.attackPlayer();
        },
        surrender() {
            this.winner = "monster";
        },
    },
});

app.mount("#game");
