/****************************************************************************************************
* Pixel
****************************************************************************************************/

// Use THREEjs cubes as pixel
const geometry = new THREE.BoxGeometry(1, 1, 1); 

class Pixel {
    constructor(material, destination) {
        this.mesh = new THREE.Mesh(geometry, material);
        // Set pixel to start at random position
        this.mesh.position.set(randRange(-1000, 1000), randRange(-1000, 1000), randRange(-1000, 1000));
        
        this.destination = destination;
        this.speed = Math.random() / 100 + 0.01;
    }

    update() {
        // Move pixel to their destination
        this.mesh.position.x += (this.destination.x - this.mesh.position.x) * this.speed;
        this.mesh.position.y += (this.destination.y - this.mesh.position.y) * this.speed;
        this.mesh.position.z += (this.destination.z - this.mesh.position.z) * this.speed;
    }
}

function randRange(min, max) {
    return Math.random() * (max - min) + min;
}