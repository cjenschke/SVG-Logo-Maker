class Shape {
    constructor(shapeColor){
        this.shapeColor = shapeColor;
    }
    render(){
        throw new Error ("Method 'render' must be implemented");
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`;
    }
}

class Circle extends Shape{
    render(){
        return `<circle cs="150" cy="100" r="80" fill=${this.shapeColor}"/>`;
    }
}

class Square extends Shape{
    render(){
        return `<rect x="150" y="50" width="200" height="200" fill="${this.shapeColor}"/>`;
    }
}

module.exports = {
    Shape,
    Triangle,
    Circle,
    Square,
};