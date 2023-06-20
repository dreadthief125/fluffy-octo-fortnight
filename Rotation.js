
AFRAME.registerComponent("diver-rotation-reader", {
  schema: {
    speedOfRoation: { type: "number", default: 0 },
    speedOfAscent: { type: "number", default: 0 }
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      this.data.speedOfRoation = this.el.getAttribute("rotation");      
      this.data.speedOfAscent = this.el.getAttribute("position");
      var diverRot = this.data.speedOfRoation;      
      var diverPos = this.data.speedOfAscent;
      if (e.key === "D") {
        if (diverRot.x < 10) {
          diverRot.x += 0.5;
          this.el.setAttribute("rotation", diverRot);
        }
      }
      if (e.key === "A") {
        if (diverRot.x > -10) {
          diverRot.x -= 0.5;
          this.el.setAttribute("rotation", diverRot);
        }
      }
      if (e.key === "W") {
        if (diverRot.z < 20) {
          diverRot.z += 0.5;
          this.el.setAttribute("rotation", diverRot);
        }
        if (diverPos.y < 2) {
          diverPos.y += 0.01;
          this.el.setAttribute("position", diverPos);
        }
      }
      if (e.key === "S") {
        if (diverRot.z > -10) {
          diverRot.z -= 0.5;
          this.el.setAttribute("rotation", diverRot);
        }
        if (diverPos.y > -2) {
          diverPos.y -= 0.01;
          this.el.setAttribute("position", diverPos);
        }
      }
    });
  }
});