const canvas = document.
    querySelector('canvas')
const c = canvas.getContext('2')

canvas.width = innerWidth
canvas.height = innerHeight

class Bullet{
    constructor(x, y, radius, color, velocity)
    {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }
    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()


    }

    update() {
        this.draw()
        this.x =this.x + this.velocity.x
        this.y =this.y + this.velocity.y
    }
}
const x = canvas.width / 2
const y = canvas.height / 2


const Bullets = []

function animate() {
    requestAnimationFrame(animate)
    Bullets.forEach((Bullet) => {
            Bullet.update()
        })
}

addEventListener('click', (event) => {

    const angle = Math.atan2(
    event.clientY - canvas.height / 2,
    event.clientX - canvas.width / 2
    )

    console.log(angle)
    Bullets.push(
        new Projectile(
        canvas.width / 2, canvas.height
        / 2, 5, 'red', 
        {
            x: 1,
            y : 1
        }
    ))

    const Bullets = [Bullet]

    function animate() {
        requestAnimationFrame(animate)
        Bullet.forEach(Bullet => 
            {
                Bullet.update()
            });
        
    }

        Bullet.draw()
        Bullet.update()
});
