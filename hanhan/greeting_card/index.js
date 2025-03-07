class Snowflake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.radius = 0;
        this.alpha = 0;

        this.reset();
    }

    reset() {
        this.x = this.randBetween(0, window.innerWidth);
        this.y = this.randBetween(0, -window.innerHeight);
        this.vx = this.randBetween(-3, 3);
        this.vy = this.randBetween(2, 5);
        this.radius = this.randBetween(1, 4);
        this.alpha = this.randBetween(0.1, 0.9);
    }

    randBetween(min, max) {
        return min + Math.random() * (max - min);
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.y + this.radius > window.innerHeight) {
            this.reset();
        }
    }
}

class Snow {
    constructor() {
        this.canvas = document.querySelector('canvas.snow');
        this.ctx = this.canvas.getContext("2d");

        document.body.appendChild(this.canvas);

        window.addEventListener("resize", () => this.onResize());
        this.onResize();
        this.updateBound = this.update.bind(this);
        requestAnimationFrame(this.updateBound);

        this.createSnowflakes();
    }

    onResize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    createSnowflakes() {
        const flakes = window.innerWidth / 4;

        this.snowflakes = [];

        for (let s = 0; s < flakes; s++) {
            this.snowflakes.push(new Snowflake());
        }
    }

    update() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        for (let flake of this.snowflakes) {
            flake.update();

            this.ctx.save();
            this.ctx.fillStyle = "#FFF";
            this.ctx.beginPath();
            this.ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
            this.ctx.closePath();
            this.ctx.globalAlpha = flake.alpha;
            this.ctx.fill();
            this.ctx.restore();
        }
        requestAnimationFrame(this.updateBound);
    }
}

new Snow();



let mtb = document.querySelector('.main-text-body')
let imgs = mtb.getElementsByTagName('img')
let current_img_idx = 0

function turn_show() {
    for (let i = 0; i < imgs.length; i++) {
        if (i === current_img_idx) {
            imgs[i].style.display = ''
        }
        else {
            imgs[i].style.display = 'none'
        }
    }

    let fan = document.getElementById('img-fan')
    let boom = document.getElementById('img-boom')
    if (current_img_idx === imgs.length - 1) {
        fan.style.display = 'none'
        boom.style.display = ''
    } else {
        boom.style.display = 'none'
        fan.style.display = ''
    }
}
turn_show()
mtb.addEventListener('click', (event) => {
    // console.log(mtb.getElementsByTagName('img'))
    current_img_idx += 1
    current_img_idx %= imgs.length
    turn_show()
})