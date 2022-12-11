const app = new Vue({
    el: "#app",
    data: {
      currentPic: "pic4.jpg",
      pics: ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg"],
      nowShowing:"",
    },
    methods: {
      changePic() {
        const currentIndex = this.pics.indexOf(this.currentPic);
        if (currentIndex > 0) {
          this.currentPic = this.pics[currentIndex - 1];
          this.nowShowing = currentIndex
        } else {
          this.currentPic = this.pics[this.pics.length - 1];
          this.nowShowing = 4
        }
      }
    },
  });


  